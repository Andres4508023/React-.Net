import React  from 'react';
/* import React, {useState} from 'react'; */
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from './theme/theme';
import { TextField, Button} from '@material-ui/core';

/* import Perfil from './Componentes/Perfil'; 
import RegistrarUsuario from './Componentes/seguridad/Registrar';
*/
function App() {
  return (
  <MuiThemeProvider theme ={theme}>
  <h1>Proyecto en blanco</h1>
  <TextField variant ="outline"/>
  <Button variant='contained' color="primary">Mi Boton material</Button>
  {/* <RegistrarUsuario/> */}
  </MuiThemeProvider>
  )
}

  export default App;
 /*  const [nombre, cambiarnombre] = useState('No tiene nombre');

function eventoCajaTexto(e){
  cambiarnombre(e.Target.value);
} */

  /* return (
    <div>
    
      <h1>Welcome to course {nombre}</h1>
        <input name="nombre" type="text" value={nombre} onChange={eventoCajaTexto}/>
   */ /*    <Perfil attributomio={nombre}/>
          <Perfil attributomio={nombre}/>
 */     
     /*   <Perfil/>
    </div> 
  );*/



