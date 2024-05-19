// src/api/ApiService.js
import axios from 'axios';

class ApiService {


  // GET request
  static async get(endpoint, params = {}) {
    let client = axios.create({
      baseURL: "http://localhost:8000/v1/",
    });
    try {
      const queryString = Object.keys(params)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      .join('&');
      const response = await client.get(endpoint+"?"+queryString, );
      return response.data;
     

    }
    catch (error) {
      console.log('API call error', error);

    }
  }

  // POST request
  static async post(endpoint, data) {
    let client = axios.create({
      baseURL: "http://localhost:8000/v1/",
    });
    try {
      const response = await client.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.log('API call error', error);

    }
  }

  // Error 
}

export default ApiService;
