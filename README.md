# viewportchange.js
Small script that adds the "viewportchange" event, which is fire it when the size screen change (fullscreen <-> normal screen, portrait <-> landscape (mobile), hidding buttons bar (android phones), also this script adds to window the getRVP() method, this method will get you a plain object with following format:

``` javascript
let rvp = {
            pvh: 123,  //Portrait  viewport height (similar to vh css unit)
            pvw: 123,  //Portrait  viewport width  (similar to vw css unit)
            lvh: 123,  //Landscape viewport height
            lvw: 123   //Landscape viewport width
        };
```
## Compatibility

For internet explorer 11 or higher.

## How to use?

This script require [Device.js](https://github.com/erovas/Device.js) preloaded, and then import viewportchange.js JavaScript library wherever you want into the document before using it.

``` html
<script src="Device.min.js"></script>
<script src="viewportchange.min.js"></script>
<script>
    window.onviewportchange = function(e){
      console.log(e.data || window.getRVP());
    }
  
    window.addEventListener("viewportchange", function(e){
      console.log(e.data || window.getRVP());
    }, false)
</script>
```

or

``` html
<script defer src="Device.min.js"></script>
<script defer src="viewportchange.min.js"></script>
<script defer src="otherScript.js"></script>
```

or

``` html
<script type="module" src="Device.min.js"></script>
<script type="module" src="viewportchange.min.js"></script>
<script type="module" src="otherScript.js"></script>
```

or

``` html
<script type="module">
    import "Device.min.js";
    import "viewportchange.min.js";
    
    window.onviewportchange = function(e){
      console.log(e.data || window.getRVP());
    }
  
    window.addEventListener("viewportchange", function(e){
      console.log(e.data || window.getRVP());
    }, false)
</script>
```

## Demo

https://erovas.github.io/viewportchange.js/

## Authors

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## License

This project is licensed under the BSD 3-Clause License - see the [LICENSE](https://github.com/erovas/viewportchange.js/blob/main/LICENSE) file for details.


# Spanish - Español

# viewportchange.js
Pequeño script que agrega el evento "viewportchange", el cual es disparadao cuando el tamaño de la pantalla cambia (fullscreen <-> normal screen, portrait <-> landscape (mobile), hidding buttons bar (android phones), además este script agrega a window el metodo getRVP(), este metodo te dará un objeto plano con el siguiente formato:

``` javascript
let rvp = {
            pvh: 123,  //Portrait  viewport height (similar to vh css unit)
            pvw: 123,  //Portrait  viewport width  (similar to vw css unit)
            lvh: 123,  //Landscape viewport height
            lvw: 123   //Landscape viewport width
        };
```
## Compatibilidad

Para internet explorer 11 o superior.

## ¿Cómo utilizarlo?

Este script requiere [Device.js](https://github.com/erovas/Device.js) precargado, y después importar viewportchange.js JavaScript library en cualquier parte dentro del documento antes de usarlo.

``` html
<script src="Device.min.js"></script>
<script src="viewportchange.min.js"></script>
<script>
    window.onviewportchange = function(e){
      console.log(e.data || window.getRVP());
    }
  
    window.addEventListener("viewportchange", function(e){
      console.log(e.data || window.getRVP());
    }, false)
</script>
```

o

``` html
<script defer src="Device.min.js"></script>
<script defer src="viewportchange.min.js"></script>
<script defer src="otherScript.js"></script>
```

o

``` html
<script type="module" src="Device.min.js"></script>
<script type="module" src="viewportchange.min.js"></script>
<script type="module" src="otherScript.js"></script>
```

o

``` html
<script type="module">
    import "Device.min.js";
    import "viewportchange.min.js";
    
    window.onviewportchange = function(e){
      console.log(e.data || window.getRVP());
    }
  
    window.addEventListener("viewportchange", function(e){
      console.log(e.data || window.getRVP());
    }, false)
</script>
```

## Demo

https://erovas.github.io/viewportchange.js/

## Autores

* **Emanuel Rojas Vásquez** - *Initial work* - [erovas](https://github.com/erovas)

## Licencia

Este proyecto está licenciado bajo Licencia BSD 3-Clause - ver el archivo [LICENCIA](https://github.com/erovas/viewportchange.js/blob/main/LICENSE) para mas detalles.
