import React, { useEffect, useState } from "react";
import axios from 'axios';
function Perfil(props)
{
    /*   useEffect( () => {
        document.title = props.attributomio;
     }, [props.attributomio])
   */ 

       /*  return(
        <div style={{background:"yellow"}}>
            Este es mi nuevo componente perfil {props.attributomio}
        </div>
    ); */
    
        const [paises, obtenerPaises] = useState([]);
        const [status, cambiarStatus]  = useState(false);
        
        useEffect( () =>{
            axios.get('https://restcountries.com/v3.1/all')
            .then(resultado => {
                obtenerPaises(resultado.data);
                cambiarStatus(true);
            })
            .catch(error => {
                cambiarStatus(true);
            })
        }, [])

        if (status){
            return (
                <ul>
                    {paises.map((pais, indice) =>
                        <li key={indice}>{pais.name}</li>
                    )}
                </ul>
            );
        }
        else{
        return (
        <h1>Esta cargando los valores del servicio ...</h1>
        );
        }
  
}

export default Perfil;