import React, { useEffect } from "react";
import Header from "../components/Header/Header"
import ReactDOM from 'react-dom'




const DefaultLayout  = ({ titleInput= "", child}) => {
    useEffect(() => {
        document.title = titleInput
      }, [])
    return (
        <div>
            <Header></Header>
            <div>{child}</div>
        </div>


    );
}

export default DefaultLayout;
