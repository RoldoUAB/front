import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import RequestMaker from "../Utils/RequestMaker"

export default class AddUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      type: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const { name, password, email, type } = this.state;
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Type:", type);


    if (type === "1") {
    RequestMaker.post("banker/",{
      "name": name,
      "mail": email,
      "password": password
    });
  }

  if (type === "2") {
    RequestMaker.post("driver/",{
      "name": name,
      "mail": email,
      "password": password
    });
  }
  }

  render() {
    return (
      <DefaultLayout child={
        <div className="bg-gray-100 flex justify-center items-center h-screen">
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4">Add User</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                autoComplete="off"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your type</label>
              <select
                id="type"
                name="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option value="">Select your type</option>
                <option value="1">Banker</option>
                <option value="2">Driver</option>
              </select>
            </div>

            <button
              id="btnAddUser"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4 w-full"
              onClick={this.handleSubmit}
            >
              Add User
            </button>
          </div>
        </div>
      }>
      </DefaultLayout>
    );
  }
}
