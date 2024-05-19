import DefaultLayout from "../layouts/DefaultLayout";
import CustomMap from "../components/Map/CustomMap";
import ButtonAction from '../components/UIComponents/ButtonAction';
import RequestMaker from "../Utils/RequestMaker";
import React from 'react';

export default class HomePage extends React.Component {
  
  state = {
    destinations: [],
    originLocation: [],
    destinationLocation: [],
    data:  [
      [41.7613, 1.47715],   // Calonge de Segarra
      [41.7643, 1.4213],    // Castellfollit de Riubregós
      [41.7101, 1.5184],    // Prats de Rei
      [41.7001, 1.4202],    // Pujalt
      [41.7366, 1.5276],    // Sant Pere Sallavinera
      [41.7111, 1.4937],    // Sant Martí Sesgueioles
      [41.6219, 1.4751],    // Argençola
      [41.6481, 1.5197],    // Copons
      [41.5833, 1.5412],    // Jorba
      [41.6529, 1.4727],    // Montmaneu
      [41.6248, 1.5623],    // Rubió
      [41.6800, 1.4878],    // Veciana
      [41.5071, 1.4624],    // Bellprat
      [41.6126, 1.7624],    // Bruc
      [41.6038, 1.7059],    // Castellolí
      [41.5172, 1.5582],    // Orpí
      [41.4903, 1.5481],    // Santa Maria de Miralles
      [41.4875, 1.7125],    // Cabrera d'Anoia
      [41.3851, 2.1734]    // Torre de Claramunt
    ],
    nowRuteIndex: 0,
    startRoute: false,
    isStart: false
  };

  constructor(props) {
    super(props);
    this.customMapRef = React.createRef();
  }

  handleClick = async () => {
    try {
      const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${0}`)).json();
    } catch (err) {
      console.log(err.message);
    }
  }

  changeState = () => {
    if (this.customMapRef.current && this.state.nowRuteIndex < this.state.data.length - 1) {
      this.customMapRef.current.calculateRoute(); 
    }
    
    this.setState(prevState => ({
      nowRuteIndex: (prevState.nowRuteIndex + 1),
      startRoute: true
    }));
  };

  sendLocation = async () => {
    if (this.state.destinations.length > 0) {
      const fetchData = async () => {
        console.log("destination on fetch");
        const currentDestination = this.state.destinationLocation;
        const data = await RequestMaker.get("routeFinder/next/1", {});
        console.log(data);
        const newDestination = [data[0]["lat"], data[0]["lng"]];
        this.setState(prevState => ({
          originLocation: currentDestination,
          destinationLocation: newDestination,
          destinations: [currentDestination, newDestination]
        }));
        this.customMapRef.current.calculateRoute(currentDestination, newDestination);
      };
      fetchData();
    } else {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const originLocation = [42.04627, 2.26679];
            const data = await RequestMaker.get("routeFinder/next/1", { "lat": 42.04627, "lng": 2.26679 });
            
            if (data !== undefined) {
              const destinationLocation = [data[0]["lat"], data[0]["lng"]];
              this.setState({
                originLocation,
                destinationLocation,
                destinations: [originLocation, destinationLocation],
                isStart: false
              });
              this.customMapRef.current.calculateRoute(originLocation, destinationLocation);
            }
          },
          (error) => {
            console.log("error:" + error.message);
          }
        );
      } else {
        console.log("ERROR");
      } 
    }


  }

  sendArrive = async () => {
    
    if (this.state.destinations.length > 0) {
      const fetchData = async () => {

        const data0 = await RequestMaker.get("route/arrive/1", {});

      };
      fetchData();
      this.customMapRef.current.cleanPaths();
    }


  }

  render() {
    return (
      <DefaultLayout
        titleInput="Home"
        child={
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-2xl p-12 bg-white rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold text-center mb-6">Fes la teva Ruta!!</h1>
              <div className="mb-12">
                <CustomMap ref={this.customMapRef} />
              </div>
              <div className="flex justify-center">
                <button className="">
                  {this.state.startRoute ? 
                    this.state.data[this.state.nowRuteIndex].toString() : 
                    <div>
                      <ButtonAction text="He llegado" onClick={this.sendArrive}></ButtonAction>

                      <ButtonAction text="Contniua Ruta" onClick={this.sendLocation}></ButtonAction>
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
