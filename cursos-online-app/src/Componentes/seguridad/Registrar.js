
import React from "react";
/* import  {Container, Typography, Grid, TextField} from '@material-ui/core'; */
import  {Container,  Grid, TextField} from '@material-ui/core';

const style ={
    paper :{
        marginTop :8,
        display: "flex",
        flexDirection:"column",
        alignItems : "center"
    },

    form:{
        width : "100%",
        marginTop : 20
    }
}

const RegistrarUsuario = () =>{

    return(
       
       <Container component="main" maxWidth="md" justify="center">
            <div style={style.paper}>
               {/*  <Typography  component="h1" variant="h1" variant="h5">
                    Registro de usuario
                </Typography> */}

                <form style={style.form}>
                    <Grid item xs={12} md={6}>
                        <TextField name="nombre" variant="outlined" fullWidth label="Ingrese su nombr"/>
                    </Grid>
                </form>
            </div>
       </Container>
    );
}

export default RegistrarUsuario;