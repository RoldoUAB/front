import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

export default class AddUserPage extends React.Component {
  

    
    constructor(props) {
      super(props);

    }
  

  
    render() {
      const state = this.state;
      return (
        <DefaultLayout child={
<div className="bg-gray-100 flex justify-center items-center h-screen">
  <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 className="text-2xl font-semibold mb-4">Add User</h1>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-600">Name</label>
      <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500" autoComplete="off"/>
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500" autoComplete="off"/>
    </div>

    <div className="mb-4">
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>Admin</option>
    <option>Driver</option>
  </select>
    </div>

    <button id="btnAddUser" className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4 w-full">Add User</button>
  </div>
</div>}>
        </DefaultLayout>

      );
    }
  }

