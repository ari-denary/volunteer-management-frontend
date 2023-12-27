

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class VolunteerManagementApi {

  static token;

  static async request(endpoint: string, data: object = {}, method: string = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_API_URL}/${endpoint}`;
    const headers = { 
      "Authorization": `Bearer ${VolunteerManagementApi.token}`, 
      "Content-Type": "application/json",
    };

    try {
      const response = await fetch(
        url,
        {
          method: method,
          headers: headers,
          body: JSON.stringify(data)
        }
      )
      return response.json();
    } catch (err: any) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
      return { error: message };
    }
  }

  /** signup user 
  {
    "badge_number":"1",
    "email":"sample@mail.com",
    "password":"password",
    "first_name":"sample",
    "last_name":"user",
    "dob":"datetime.datetime(2000, 1, 1, 0, 0)",
    "gender":"Prefer not to say",
    "address":"123 Cherry lane",
    "city":"New York",
    "state":"NY",
    "zip_code":"11001",
    "phone_number":"9991234567",
    "is_student":"true",
    "is_multilingual":"false"
}
*/
  static async signup(user) {
    console.log("VolunteerManagementApi signup", user);
    const response = await VolunteerManagementApi.request(`signup`, user, "post");
    VolunteerManagementApi.token = response.token;
    // TODO: save token in localStorage
    return response;
  }

  /** login user */
  static async login(formData) {
    console.log("VolunteerManagementApi login", formData);
    let res = await this.request(`login`, formData, "post");
    console.log("API.js res.token = ", res.token);
    return res.token;
  }


  /** upload a picture */
  static async upload(file, id) {
    console.log("VolunteerManagementApi upload", file);
    let res = await this.request(`users/${id}/images`, file, "post");
    return "Uploaded!";
  }

  /** get user info by id */
  static async getUser(id) {
    console.log("getUser called with username = ", id);
    const res = await this.request(`users/${id}`);
    console.log("getUser res = ", res);
    return res.user;
  }

  /** get user images by id */
  static async getImagesById(id) {
    console.log("VolunteerManagementAPI getImagesById", id);
    const res = await this.request(`users/${id}/images`);
    console.log("VolunteerManagementAPI getImagesById res = ", res);
    return res.images;
  }

  /** get unrated users images by user id */
  static async getUnratedUsersById(id) {
    console.log("VolunteerManagementAPI getUnratedUsersById", id);
    const res = await this.request(`users/${id}/unrated`);
    console.log("VolunteerManagementAPI getUnratedUsersById res = ", res);
    return res;
  }

  /** get user info by username */
  // static async getUser(username) {
  //   console.log("getUser called with username = ", username);
  //   const result = await this.request(`users/${username}`);
  //   return result.data.user;
  // }
}



// {
//   headers: {
//     'Content-Type': 'multipart/form-data',
//     'Access-Control-Allow-Origin': '*',
//   }
// }
export default VolunteerManagementApi;