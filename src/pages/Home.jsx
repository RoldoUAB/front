import DefaultLayout from "../layouts/DefaultLayout";
import CustomMap from "../components/Map/CustomMap";
import ButtonAction from '../components/UIComponents/ButtonAction';

import React from 'react';

export default class HomePage extends React.Component {
  
  state = {
    data: [[41.5667, 0.5167],  [41.61674, 0.62218], [41.67318, 0.60671], [41.79117, 0.81094], [41.67003, 1.2721], [41.38879, 2.15899]],
    nowRuteIndex: 0,
    startRoute: false,
    isStart: true
  };

  constructor(props) {
    super(props);
    this.customMapRef = React.createRef();
    // Create a ref for CustomMap
  }



  handleClick = async () => {
    try {
      const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${0}`)).json();
    } catch (err) {
      console.log(err.message);
    }
  }

  changeState = () => {
    // Call a method on the CustomMap instance
    if (this.customMapRef.current && this.state.nowRuteIndex < this.state.data.length - 1) {
      this.customMapRef.current.calculateRoute(this.state.data[this.state.nowRuteIndex], this.state.data[this.state.nowRuteIndex + 1]); // Call the method on CustomMap instance
    }
    
    this.setState(prevState => ({
      nowRuteIndex: (prevState.nowRuteIndex + 1) % this.state.data.length,
      startRoute: false
    }));
  };


  sendLocation = () =>{
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("CORDS"+position.coords);
          this.setState(previousState => ({
            data: [...previousState.data, [position.coords.latitude, position.coords.longitude]]
        }));
        },
        (error) => {
          console.log("error:"+error.message);
        }
      );
    } else {
      console.log("ERROR");
    }
  }


  render() {
    const initialPosition = [41.5667, 0.5167];

    const state = this.state;
    return (
      <DefaultLayout
        titleInput="Home"
        child={
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl p-12 bg-white rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center mb-6">Fes la teva Ruta!!</h1>
              <div className="mb-12">
                <CustomMap ref={this.customMapRef}  initialPosition={initialPosition} />
              </div>
              <div className="flex justify-center">
                <button className="">
                  {this.state.startRoute ? 
                    this.state.data[this.state.nowRuteIndex].toString() : 
                    <div>
                      <ButtonAction text="Inicar Ruta" onClick={this.changeState}></ButtonAction>
                      <ButtonAction text = "Enviar Localizacion" onClick={this.sendLocation}></ButtonAction>
                    </div>
                  }
                </button>
              </div>
            </div>
          </div>
        }
      />
    );
  }
}