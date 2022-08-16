import React from "react";
import axios from "axios"
import swAlert  from 'sweetalert2'
import { useNavigate  } from "react-router-dom";


function Login() {

    let navigate = useNavigate ();

    const submitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if ( email === "" || password === "" ){
            return swAlert.fire( "<h2>Los campos no pueden estar vacíos</h2>")
        }

        if( email !== "" && !regexEmail.test(email) ) {
            return swAlert.fire( "<h2>Debes escribir una dirección de correo electrónico válida</h2>")
        }

        if (email !== "challenge@alkemy.org" || password !== "react") {
            return swAlert.fire("<h2>Credenciales inválidas</h2>")
        }

        axios
        .post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
                swAlert.fire("<h2>Sesión iniciada correctamente</h2>")
                const token = res.data.token
                localStorage.setItem("token",token)
                navigate("/listado");
            })
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
