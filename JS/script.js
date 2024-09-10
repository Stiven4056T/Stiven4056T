const $tiempo = document.querySelector('.tiempo'), //Funciones para la Fecha y hora
$fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(),
    dia = f.getDate(),
    mes = f.getMonth() + 1,
    anio = f.getFullYear(),
    diaSemana = f.getDay();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    let showSemana = (semana[diaSemana]);
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    digitalClock()
}, 1000);

//Funcion de tabla de colorear
document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById('pixel-grid');
    const colorPicker = document.getElementById('color');
    const eraser = document.getElementById('eraser');
    let isMouseDown = false;
    let isErasing = false; // Para controlar si estamos borrando o coloreando
  
    // Crear los píxeles
    for (let i = 0; i < 256; i++) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
  
      // Cambiar color al hacer clic
      pixel.addEventListener('mousedown', function() {
        isMouseDown = true; // Cuando se hace clic, se activa el modo de dibujar
        if (isErasing) {
          pixel.style.backgroundColor = '#fff'; // Borrar cambiando a color blanco
        } else {
          pixel.style.backgroundColor = colorPicker.value;
        }
      });
  
      // Cambiar color mientras arrastras
      pixel.addEventListener('mousemove', function() {
        if (isMouseDown) {
          if (isErasing) {
            pixel.style.backgroundColor = '#fff'; // Borrar mientras arrastras
          } else {
            pixel.style.backgroundColor = colorPicker.value;
          }
        }
      });
  
      // Detectar cuando el ratón deja de estar presionado
      pixel.addEventListener('mouseup', function() {
        isMouseDown = false; // Detener el modo de dibujar cuando se suelta el clic
      });
  
      grid.appendChild(pixel);
    }
  
    // Detectar cuando el ratón se suelta en cualquier parte del documento (por si se suelta fuera de un píxel)
    document.addEventListener('mouseup', function() {
      isMouseDown = false; // Asegurarse de que al soltar el clic en cualquier lugar se detenga el dibujo
    });
  
    // Cambiar a modo borrador cuando se hace clic en el botón de borrar
    eraser.addEventListener('click', function() {
      isErasing = !isErasing; // Alternar entre colorear y borrar
      eraser.textContent = isErasing ? 'Colorear' : 'Borrador'; // Cambiar el texto del botón
    });
  });