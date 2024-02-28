/*!
 * viewportchange.js v1.0.0
 * Evento que se dispará cuando hay un cambio en el viewport del dispositivo (por fullscreen, landscape<->portrait, cambio de resolucion).
 * Además agrega a window el metodo getRVP() que entrega un objeto plano con el siguiente formato.
 * - Portrait  viewport height = pvh
 * - Landscape viewport height = lvh
 * - Portrait  viewport width  = pvw
 * - Landscape viewport width  = lvw
 * [Back-compatibility: IE11+]
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * BSD 3-Clause License
 * https://github.com/erovas/viewportchange.js
 */
(function(window){

    let VIEWPORTCHANGE = 'ViewportChange';
    let CUSTOM_EVENT = 'CustomEvent';
    let FUNCTION = 'function';
    let Device = window.Device;

    if(!Device)
        return console.error(VIEWPORTCHANGE + '.js require Device.js');
    if(window['on'+VIEWPORTCHANGE] !== undefined)
        return console.error(VIEWPORTCHANGE + '.js has already been defined');

    //Polyfill for IE | Taken and modified from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#polyfill
    if(typeof window[CUSTOM_EVENT] !== FUNCTION){
        window[CUSTOM_EVENT] = function(event, params){
            params = params || { bubbles: false, cancelable: false, detail: null };
            const evt = document.createEvent(CUSTOM_EVENT);
            evt['init'+CUSTOM_EVENT]( event, params.bubbles, params.cancelable, params.detail );
            return evt;
        }
    }

    function getVP(){
        var pvh = 0;
        var pvw = 0;
        
        if(Device.isFullScreen){
            if(Device.isMobile && Device.isLandscape){
                pvh = Device.vw;
                pvw = Device.vh;
            }
            else if(Device.isPortrait) { //desktop vertical
                pvh = Device.vh;
                pvw = Device.vw; 
            }
            else {  //desktop horizontal
                pvh = Device.vw;
                pvw = Device.vh;
            }
        }
        else if(Device.isMobile){
            if(Device.isPortrait) {
                pvh = Device.vh;
                pvw = Device.vw;

                //Corrección para navegador en Xiaomi (Firefox - mobile android)
                var ppvh = window.outerHeight / 100;
                pvh = pvh < ppvh? ppvh : pvh;
            }
            else {
                pvh = Device.vw;
                pvw = Device.vh;

                //Corrección para navegador en Xiaomi (Firefox - mobile android)
                var ppvw = window.outerHeight / 100;
                pvw = pvw < ppvw? ppvw : pvw;
            }
        }
        else { //isDesktop
            if(Device.isPortrait) { //vertical
                pvh = (screen.availHeight - Device.addressBar.height) / 100;
                pvw = screen.availWidth / 100;
            }
            else {  // horizontal
                pvh = screen.availWidth / 100; 
                pvw = (screen.availHeight - Device.addressBar.height) / 100;
            }
        }

        return {
            pvh: pvh,
            pvw: pvw,
            lvh: pvw,
            lvw: pvh
        };
    }

    //Creación del evento custom
    let viewportchangeEvent = new window[CUSTOM_EVENT](VIEWPORTCHANGE);
    //Para guardar la function del oncustomevent
    let on_event = null;
    let initialVP = getVP();
    
    
    //Anti-rebote para evento resize
    let debounced = null;
    //Creacion evento resize para disparar el evento custom
    window.addEventListener('resize', function(){
        if(debounced)
            clearTimeout(debounced);

        debounced = setTimeout(function() {
            
            let currentVP = getVP();

            if(currentVP.pvh !== initialVP.pvh || currentVP.pvw !== initialVP.pvw){
                initialVP = currentVP;
                viewportchangeEvent.data = currentVP;
                window.dispatchEvent(viewportchangeEvent);
            }

        }, 150);
    }, false);

    //Evento onviewportchange
    Object.defineProperty(window, 'on' + VIEWPORTCHANGE, {

        set: function(value){
            if(on_event)
                window.removeEventListener(VIEWPORTCHANGE, on_event, false);

            if(typeof value === FUNCTION){
                on_event = value;
                window.addEventListener(VIEWPORTCHANGE, on_event, false);
            }
            else
                on_event = null;
        },

        get: function(){
            return on_event;
        }
    });

    //getRVP
    window.getRVP = getVP;

})(window);
