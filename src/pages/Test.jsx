import React from "react";

export default class TestingPage extends React.Component {
  

    
    constructor(props) {
      super(props);

    }
  

  
    render() {
      const state = this.state;
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg p-12 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Larger Centered Container</h1>
          <p className="text-center mb-12">
            This is a larger responsive container centered in the middle of the screen.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700">
              Centered Button
            </button>
          </div>
        </div>
      </div>
      );
    }
  }