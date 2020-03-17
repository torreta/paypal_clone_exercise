import React from 'react';
import PropTypes from "prop-types";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from "@material-ui/core/styles/withStyles";
import { Redirect } from "react-router-dom";

import PostData from './PostData';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          password_confirmation: '',
          redirect: null
        };
      }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    validateForm() {

      let verificador = this.state.email.length > 0 && this.state.password.length > 0 && this.state.password_confirmation.length > 0;
      if(verificador){
        return true;
      }else{
        alert("revisa los datos")
        return false;
      }
    }

    onSubmit = e => {
        e.preventDefault();
        if (!this.validateForm()){
          return;
        } 
          
        const data = {
          email: this.state.email,
          password: this.state.password_confirmation,
          password_confirmation: this.state.password_confirmation
        };
        
        var request = {"email": data.email, "password": data.password, "password_confirmation": data.password_confirmation};
        
        console.log(JSON.stringify(request));

        PostData('/users',"POST", data)
        .then((result) => {
          let responseJSON = result;
          console.log("lo que me llego al registrarme;")
          console.log(JSON.stringify(responseJSON))
          
            localStorage.setItem("data", result.data);
            sessionStorage.setItem("data", result.data);
          if (responseJSON.errors) {
            alert(responseJSON.errors.full_messages)

          }
          this.setState({redirect: "/signin"})
        })
        /*unhappy path=*/ 
        .catch(
          alert("fallo el login, revisa los datos")
        );
    
        // fetch('/ 
      };

  render () {
    const { classes } = this.props;
    if (this.state.redirect) {
      //redirecciona si te logueas
      return <Redirect to={this.state.redirect} />
    }
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Correo"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password_confirmation"
                    label="Repite Contraseña"
                    type="password"
                    id="password_confirmation"
                    onChange={this.handleChange}
                    autoComplete="confirmation-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
               registrar
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Ya tienes cuenta? accede
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
    
        </Container>
      );
  }
};

SignUp.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles)(SignUp);
  