import React from "react";
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  validateForm() {
    let verificador = this.state.email.length > 0 && this.state.password.length > 0;
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
      password: this.state.password
    };

    var request = {"auth": {"email": data.email, "password": data.password}}
    
    console.log(JSON.stringify(request));

    PostData('/user_token','POST', request)
    .then((result) => {
      let responseJSON = result;
      console.log("lo que llego del server");
      console.log(result);

      if (responseJSON && responseJSON.jwt) {
        localStorage.setItem("jwt", result.jwt);
        sessionStorage.setItem("jwt", result.jwt);
        this.setState({redirect: "/dashboard"})
      }
    })
    .catch(
      alert("fallo el login, revisa los datos")
    );

    // fetch('/ 
  };

  render() {
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
          Acceso
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo"
            name="email"
            autoComplete="email"
            onChange={this.handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Contraseña"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotpass" variant="body2">
                Olvidaste tu Contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);
