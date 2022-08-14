import React from "react";

function Login() {
    const submitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ( email === "" || password === "" ){
            return console.log("Los campos no pueden estar vacíos")
        }

        if( email !== "" && regexEmail.test(email) ) {
            return console.log("Debes escribir una dirección de correo electrónico válida")
        }

        if (email !== "p.ortegariera@gmail.com" || password !== "MovieApp") {
            return console.log("Credenciales inválidas")
        }

        console.log("Sesión iniciada correctamente")
    }
    
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <label>
        <span>Email:</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Contraseña:</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
