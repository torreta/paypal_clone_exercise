import API from "./api.js";

/*
 * Http requests to the API wrapper
 * Several utilities functions realated to the token, roles and app modes.
 */
export var ApiUtils = {
  checkStatus: async function (response, source = "default") {
    // console.log("Con el p-arametro custom default");
    // console.log(source);

    var error = false;
    var mensaje = "";

    // console.log("pinche response en checksattus");
    // console.log(response);

    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      if (response.status >= 500 && response.status < 600) {
        console.log("error comunicacion con el servidor (checkstatus)");
        error = "server";
      }

      if (response.status == 400) {
        console.log("error de peticion con el servidor (checkstatus)");
        error = "request";
      }

      if (response.status == 401) {
        console.log("error autenticacion con el servidor (checkstatus)");
        error = "auth";
      }

      if (response.status == 422) {
        console.log("error autenticacion usuario (checkstatus)");
        error = "entity";
      }

      if (response.status == 444) {
        console.log("respuesta no valida");
        error = "redirect";
      }

      console.log("error especifico en el fetch (checkstatus)");
      // console.log(response);
      console.log(source);

      switch (source) {
        case "password":
          if (error == "request") {
            // el mensaje de error que me da el endpoint (email en uso)(registro)
            // NOTA: ESTE ERROR DEBERIA ESTAR FOMALITO POR EL MODULO DE TRADUCCIONES (?)
            await response.json().then(function (data) {
              throw new Error(data.message);
            })
          }
          break;
        case "register":
          if (error == "entity") {
            // NOTA: Errores de password de formato invalido tambien son 422
            //el mensaje de error que me da el endpoint (email en uso)(registro)
            console.log("estoy aqui?")
            await response.json().then(function (data) {
              // Alert.alert("Error", data.message);
              throw new Error(data.message);
            })
            // mensaje = JSON.parse(response._bodyInit).message;
            // // NOTA: ESTE ERROR DEBERIA ESTAR FOMALITO POR EL MODULO DE TRADUCCIONES
            // throw new Error(mensaje);
          }
          if (error == "request") {
            // console.log("CASO JOIN CHANNEL" +  JSON.stringify(response));
            await response.json().then(function (data) {
              // console.log("PROMESA TERMiNADA")
              // console.log(data)
              // Alert.alert("Error", data.message);
              throw new Error(data.message);
            })
          }
          break;
        case "login":
          if (error == "entity") {
            //el mensaje de error que me da el endpoint (email en uso)(registro)
            console.log("Estoy donde yo creo?");
            mensaje = JSON.parse(response._bodyInit).message;
            // NOTA: ESTE ERROR DEBERIA ESTAR FOMALITO POR EL MODULO DE TRADUCCIONES
            throw new Error(mensaje);
          }
          if (error == "request") {
            //el mensaje de error que me da el endpoint (email en uso)(registro)
            await response.json().then(function (data) {
              // console.log("PROMESA TERMiNADA")
              // console.log(data)
              // Alert.alert("Error", data.message);
              // throw new Promise.resolve({ type: "Error" , message: data.message });
              throw new Error(data.message);
              // throw data.message;
            })
          }
          break;
        case "facebook":
          if (error == "entity") {
            //el mensaje de error que me da el endpoint (email en uso)(registro)
            // mensaje = JSON.parse(response._bodyInit).message;
            // NOTA: ESTE ERROR DEBERIA ESTAR FOMALITO POR EL MODULO DE TRADUCCIONES
            // throw new Error(mensaje);
            await response.json().then(function (data) {
              throw new Error(data.message);
            });
          }
          if (error == "request") {
            //el mensaje de error que me da el endpoint (email en uso)(registro)
            // NOTA: ESTE ERROR DEBERIA ESTAR FOMALITO POR EL MODULO DE TRADUCCIONES
            // console.log("RESPONSE LITERAL DEL API DE REGRESO /SOCIAL")
            // mensaje = JSON.parse(response._bodyInit).message;
            // console.log(mensaje)
            // throw new Error(mensaje);
            await response.json().then(function (data) {
              throw new Error(data.message);
            });
          }
          break;
        case "joinChannel":
          if (error == "request") {
            // console.log("CASO JOIN CHANNEL" +  JSON.stringify(response));
            await response.json().then(function (data) {
              // console.log("PROMESA TERMiNADA")
              // console.log(data)
              // Alert.alert("Error", data.message);
              throw new Error(data.message);
            })
          }
          break;
        case "device_token":
          if (error == "request") {
            await response.json().then(function (data) {
              // Alert.alert("Error", data.message);
              throw new Error(data.message);
            })
          }
          break;
        case "default":
          if (error == "default")
            break;
          if (error == "server") {
            throw new Error("Error al obtener informacion");
          }
          if (error == "request") {
            await response.json().then(function (data) {
              throw new Error(data.message);
            })
          }
          if (error == 'redirect') {
            throw new Error('444');
          }
        default:
          console.log(
            "fuente de error desconocida " + source + " (checkstatus)"
          );
          break;
      }

      captureException(response);

      throw new Error(response);
    }
  }
};
