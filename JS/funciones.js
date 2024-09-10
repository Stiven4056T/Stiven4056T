// Obtener la modal de iniciar sesión
var modal = document.getElementById("loginModal");

// Obtener el botón que abre la modal de iniciar sesión
var btn = document.querySelector(".loginbtn");

// Obtener el elemento <span> que cierra la modal de iniciar sesión
var span = modal.querySelector(".close");

// Cuando el usuario hace clic en el botón, abre la modal de iniciar sesión
btn.onclick = function() {
  modal.style.display = "flex";
}

// Cuando el usuario hace clic en <span> (x), cierra la modal de iniciar sesión
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la modal de iniciar sesión, la cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Obtener la modal de registro
var registerModal = document.getElementById("registerModal");

// Obtener el botón que abre la modal de registro
var registerBtn = document.querySelector(".registerbtn");

// Obtener el elemento <span> que cierra la modal de registro
var registerSpan = registerModal.querySelector(".close");

// Cuando el usuario hace clic en el botón, abre la modal de registro
registerBtn.onclick = function() {
  registerModal.style.display = "flex";
}

// Cuando el usuario hace clic en <span> (x), cierra la modal de registro
registerSpan.onclick = function() {
  registerModal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la modal de registro, la cierra
window.onclick = function(event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
}

//Funcion para que el formulario de la ventana modal de iniciar sesion no carge la pagina
document.querySelector('.formlogin').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene la recarga de la página
  alert("Inicio de sesion exitoso!");
  this.reset();
});

//Funcion para que el formulario de la ventana modal de registrarse no carge la pagina
document.querySelector('.formregister').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene la recarga de la página
  alert("Registro exitoso!");
  this.reset();
});

//funcion para que la galeria de imagenes pueda abrir las imagenes
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}



//Funciones de la segunda ventana modal cuando le das al boton + de crear publicacion
var modalRegister = document.getElementById("modalPublic");

var registerBtn = document.getElementById("public-btn");

var closeRegisterBtn = document.getElementsByClassName("close-public")[0];

registerBtn.onclick = function (event) {
  event.preventDefault(); // Previene comportamiento por defecto
  modal.style.display = "none"; // Cierra el primer modal
  modalRegister.style.display = "block"; // Abre el segundo modal
};

closeRegisterBtn.onclick = function () {
  modalRegister.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalRegister) {
    modalRegister.style.display = "none";
  }
};

//Funcion para cambiar la imagen en la ventana modal de crear publicacion
document.getElementById('changeImageLink').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profileImage').src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});

//Funcion para que el formulario de crear publicacion no carge la pagina
document.querySelector('.form-grid').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene la recarga de la página
  alert("Publicado exitosamente!");
  this.reset();
});

