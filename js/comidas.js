const lineaComidas = document.getElementById('lineaComidas');

lineaComidas.addEventListener('mouseover',function(){
    lineaComidas.classList.replace('boton','prueba')
})

lineaComidas.addEventListener('mouseout',function(){
    lineaComidas.classList.replace('prueba','boton')
})