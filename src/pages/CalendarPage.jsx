import DefaultLayout from "../layouts/DefaultLayout";
import React from "react";
import EventCalendar from "../components/UIComponents/EventCalendar";

export default class CalendarPage extends React.Component {
  

    
    constructor(props) {
      super(props);

    }
  

  
    render() {
      const state = this.state;
      return (
        <DefaultLayout child={
            
            <EventCalendar />
        }
        
        ></DefaultLayout>
      );
    }
  }