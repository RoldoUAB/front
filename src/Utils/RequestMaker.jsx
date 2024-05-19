// src/api/ApiService.js
import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
    });
  }

  // GET request
  async get(endpoint, params = {}) {
    try {
      const response = await this.client.get(endpoint, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // POST request
  async post(endpoint, data) {
    try {
      const response = await this.client.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Error handling
  handleError(error) {
    // Handle errors here, you can customize this to show messages, etc.
    console.error('API call error', error);
    throw error;
  }
}

export default ApiService;
