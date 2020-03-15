// import API from './api';

export default function PostData(type,method,userData) {
    
    //let baseUrl = API.url;
    let baseUrl = "http://localhost:3001";

    console.log(JSON.stringify(userData));
    console.log(method);

    return new Promise((resolve, reject) => {
        fetch(baseUrl+type,{
            method: method,
            headers: {
              "Access-Control-Allow-Origin":"*",
              "access-control-allow-headers":
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
              "content-type": "application/json; charset=utf-8"
              },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            for (var pair of response.headers.entries()) {
              console.log(pair[0]+ ': '+ pair[1]);
            }
          })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        })
    });
}

