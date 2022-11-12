const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const login = document.getElementById("form");

login.addEventListener("submit", LoginUser);

function LoginUser(event) {
    //Prevenir los eventos precargados
    event.preventDefault();
    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);
    //Validar los campos no estén vacios
    if (usuario.value === "" || contraseña.value === "") {
        alert("Por favor llene todos los campos");
    } else if (!validateUser.find(user => user.user === usuario.value)){
        alert("El usuario no existe");
    }
    // Validar que la contraseña coincida
    else if(validateUser.find(user => user.user === usuario.value).cont !== contraseña.value){
        alert("La contraseña no coincide")
    }else{
        alert("Usuario loqueado con exito");
        //Ir a orta página desde JavaScript
        window.location.href = "index.html";
    }
}