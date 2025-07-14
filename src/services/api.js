import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

export const askQuestion = async (query) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask`, {
      query: query
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30000, // 30 second timeout
    });
    
    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout - please try again');
    } else if (error.response) {
      throw new Error(`Server error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error('Unable to connect to server. Please ensure the backend is running on http://localhost:8000');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};