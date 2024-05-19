import React from 'react'
import { Button } from "flowbite-react";


const ButtonAction = ({ text, onClick }) => {
    return (
    <div className="">
        <Button color="success" onClick={onClick}>{text}</Button>
     </div>
    );
}
export default ButtonAction;