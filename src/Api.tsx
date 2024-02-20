
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class VolunteerManagementApi {

  /** Request function that bundles actions needed for all requests */

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    const token = localStorage.getItem('token') || null;

    
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { 
      "Authorization": `Bearer ${token}`,
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

    if (res.ok) {
      localStorage.setItem('token', res.token);
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
      localStorage.setItem('token', res.token);
      return res.token;
    } else {
      return res.errors;
    }
  }

  // User API routes

  /** Get a user */

  static async getUser(user_id) {
    const res = await this.request(`users/${user_id}`);
    if (res.status === 200) {
      return res.user;
    } else {
      return res.errors;
    }
  }

  /** Get a user's experiences */

  static async getUserExperiences(user_id) {
    const res = await this.request(`users/${user_id}/experiences`);
    if (res.status === 200) {
      return res.user_experiences;
    } else {
      return res.errors;
    }
  }

  /** Get a user's languages spoken */

  static async getUserLanguages(user_id) {
    const res = await this.request(`users/${user_id}/languages`);
    if (res.status === 200) {
      return res.user_languages;
    } else {
      return res.errors;
    }
  }

  /** Get Race/Ethnicity Options for User */

  static async getRaceEthnicityOptions() {
    const res = await this.request(`users/race-ethnicity-options`);
    if (res.status === 200) {
      return res.race_ethnicity_options
    } else {
      return res.errors;
    }
  }

  // Experience Routes

  /** Create a new experience */

  static async createExperience({
    user_id,
    date,
    sign_in_time,
    department,
  }) {
    const res = await this.request(
      `experiences`, 
      {
        user_id,
        date,
        sign_in_time,
        department    
      },
      "POST"
    );

    if (res.ok) {
      return res.user_experience;
    } else {
      return res.errors;
    }
  }

  /** Update an experience */

  static async updateExperience({
    experience_id,
    department,
    sign_out_time,
  }) {
    const res = await this.request(
      `experiences/${experience_id}`, 
      {
        department,
        sign_out_time,
      },
      "PATCH"
    );

    if (res.ok) {
      return res.user_experience;
    } else {
      return res.errors;
    }
  }

  // Admin API routes

  /** Get all users */

  static async getAllUsers() {
    const res = await this.request(`users`);
    if (res.status === 200) {
      return res.users;
    } else {
    return res.errors
    }
  }

  /** Get all experiences */
  static async getAllExperiences() {
    const res = await this.request(`experiences`);
    if (res.status === 200) {
      return res.user_experiences;
    } else {
    return res.errors
    }
  }

}


export default VolunteerManagementApi;