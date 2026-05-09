const axios = require('axios');

async function login() {

  try {

    // LOGIN
    const loginResponse = await axios.post(
      'https://dummyjson.com/auth/login',
      {
        username: 'emilys',
        password: 'emilyspass'
      }
    );

    const token = loginResponse.data.accessToken;

   // console.log('TOKEN:', token);

    // CONSUMIR RUTA PRIVADA
    const userResponse = await axios.get(
      'https://dummyjson.com/auth/me',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

console.log({
  nombre: userResponse.data.firstName,
  email: userResponse.data.email,
  ciudad: userResponse.data.address.city
});

  } catch (error) {

    console.log(error.message);

  }
}

login();