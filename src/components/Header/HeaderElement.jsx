import React from 'react'
import { Navbar } from "flowbite-react";


const HeaderElement = ({toPage = "/", text = ""}) => {
    return (

        <Navbar.Link href={toPage} className='text-primary-400 ' active>
          <div className='p-6 hover:bg-primary-100 rounded-lg'>
                {text}
          </div>
        </Navbar.Link>
    );
}

export default HeaderElement;