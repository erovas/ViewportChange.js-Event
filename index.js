
/*!
 * Author: Emanuel Rojas Vásquez
 *  https://github.com/erovas
 */
(function(window){

    let px = 'px';
    let elem = document.documentElement;
    let button = document.getElementById('button');

    function setTable(rvp){
        pvh.textContent = rvp.pvh + px;
        pvw.textContent = rvp.pvw + px;
        lvh.textContent = rvp.lvh + px;
        lvw.textContent = rvp.lvw + px;
    }

    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    //Seteo inicial
    setTable(getRVP());

    //Uso del evento
    window.onviewportchange = function(e){
        setTable(e.data);
    }

    //Seteo evento click para entrar salir de fullscreen

    button.onclick = function(){
        if(Device.isFullScreen)
            closeFullscreen();
        else
            openFullscreen();
    }

})(window);