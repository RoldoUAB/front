// src/components/Services.js
import React from 'react';
import Logo from '../assets/logo.png'

const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
    <div className="w-1/2 h-screen hidden lg:block">
      <img src={Logo} alt="Placeholder Image" className="h-screen flex items-center justify-center object-scale-down"/>
    </div>

    <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Entrar</h1>
      <div className="mb-4">
        <label for="email" className="block text-gray-600">Correu</label>
        <input type="text" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500" autocomplete="off"/>
      </div>

      <div className="mb-4">
        <label for="password" className="block text-gray-600">Contrasenya</label>
        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-primary-500" autocomplete="off"/>
      </div>

      <div className="mb-4 flex items-center">
        <input type="checkbox" id="remember" name="remember" className="text-primary-500"/>
        <label for="remember" className="text-gray-600 ml-2 font-bold">Recorda'm</label>
      </div>


      <button id = "btnLogin"  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-md py-2 px-4 w-full">Entrar</button>
    </div>
    </div>
  );
};

export default LoginPage;