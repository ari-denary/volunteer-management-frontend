
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class VolunteerManagementApi {
  // Token for interacting with the API will be stored here
  static token = null;

  /** Request function that bundles actions needed for all requests */

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { 
      "Authorization": `Bearer ${VolunteerManagementApi.token}`,
      "Content-Type": "application/json",
    };
    
    const newRequest = new Request(
      url, 
      {
        "method": method, 
        "body": JSON.stringify(data), 
        "headers": headers,
      }
    )
    try {
      const response = await fetch(newRequest);
      const returnData = await response.json();
      return returnData;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Authentication API routes

  /** Signup */

  static async signup({
    username,
    email, 
    password, 
    first_name, 
    last_name,
    dob,
    gender,
    address,
    city,
    state,
    zip_code,
    phone_number,
    is_student,
    is_healthcare_provider,
    is_multilingual
  }) {

    const res = await this.request(
      `/signup`, 
      {
        username,
        email, 
        password, 
        first_name, 
        last_name,
        dob,
        gender,
        address,
        city,
        state,
        zip_code,
        phone_number,
        is_student,
        is_healthcare_provider,
        is_multilingual
      },
      "POST"
    );

    if (res.status === 200) {
      VolunteerManagementApi.token = res.token;
      return res.token;
    } else {
      return res.errors;
    }
  }


  /** Login */

  static async login({
    email, 
    password, 
  }) {

    const res = await this.request(
      `/login`, 
      {
        "email": email, 
        "password": password, 
      },
      "POST"
    );

    if (res.status === 200) {
      VolunteerManagementApi.token = res.token;
      return res.token;
    } else {
      return res.errors;
    }
  }

  // User API routes

  static async getUser(user_id) {
    const res = await this.request(`users/${user_id}`);
    if (res.status === 200) {
      return res.user;
    } else {
      return res.errors;
    }
  }


  // Admin API routes

  static async getAllUsers() {
    const res = await this.request(`users`);
    if (res.status === 200) {
      return res.users;
    } else {
    return res.errors
    }
  }

}

export default VolunteerManagementApi;