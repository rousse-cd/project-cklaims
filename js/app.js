const formulario = document.getElementById("form");
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const confirmar = document.getElementById("confirmar");

const userRegistered = [];
let id = 0;

formulario.addEventListener("submit", ResgisterUser);

//Registrar usuario
function ResgisterUser(event){
    //Prevenir los eventos precargados
    event.preventDefault();
    //Agregar automaticamente un ID
    id++;
    //Crear usuario objeto
    const user = {
        id: id,
        user: usuario.value,
        nomn: nombre.value,
        telf: telefono.value,
        corr: correo.value,
        cont: contraseña.value,
        conf: confirmar.value
    };
    //Validar que los campos no estén vacios
    if (
        usuario.value === "" ||
        nombre.value === "" ||
        telefono.value === "" ||
        correo.value === "" ||
        contraseña.value === "" ||
        confirmar.value === ""
    ) {
        alert("Por favor llene todos los campos");
    }
    //Validar que las contraseñas coincidan
    else if (contraseña.value !== confirmar.value){
        alert("Las contraseñas no coinciden");
    }else if (userRegistered.find(user => user.user === usuario.value)) {
        alert("El usuario ya existe");
    } 
    //Validar que el usuario no exista
    else {
        //Agregar usuario
        userRegistered.push(user);
        //Guardar array en localStorage
        localStorage.setItem("user", JSON.stringify(userRegistered));
        alert("Usuario registrado con exito");
        //Limpiar campos
        usuario.value = "";
        nombre.value = "";
        telefono.value = "";
        correo.value = "";
        contraseña.value = "";
        confirmar.value = "";
    }
}
