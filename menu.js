const menuclick = document.querySelector('.img-menus');
const navegacion = document.querySelector('.contenedor-nav');

menuclick.addEventListener('click', ()=>{
    navegacion.classList.toggle("show")
});

window.addEventListener('click', (e)=>{
    if(navegacion.classList.contains("show")
       && e.target != navegacion && e.target != menuclick){
        navegacion.classList.toggle("show");
    }
})



const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const boton = document.getElementById("boton");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e)=>{
    validarCampos();
    let error = validarCampos();

    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
    }
    else{
       resultado.innerHTML = "Solicitud enviada correctamente";
       resultado.classList.add("green");
       resultado.classList.remove("red");
    }
})

const validarCampos =()=>{
    let error = [];
    if(nombre.value.length < 5){
      error[0] = true;
      error[1] = "El nombre no puede contener menos de 5 caracteres";
        return error;
    } else if(nombre.value.length >40){
        error[0] = true;
        error[1] = "El nombre no puede contener más de 40 caracteres.";
        return error;
    } else if(email.value.length <5 || email.value.length >40 ||
        email.value.indexOf("@") ==-1 || email.value.indexOf(".")==-1){
          error[0] = true;
          error[1] = "El mail es invalido";
          return error;
    } 

    error[0] = false;
    return error;
}

ScrollReveal().reveal('#inicio');
ScrollReveal().reveal('.seccion1',{delay:600});
ScrollReveal().reveal('.seccion2',{delay:600});
ScrollReveal().reveal('.contenedor-main',{delay:600});
ScrollReveal().reveal('.contenedor-portafolio',{delay:600});
ScrollReveal().reveal('.form',{delay:600});