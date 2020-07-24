import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { RiBasketballLine } from 'react-icons/ri'
import logo from '../assets/logo.png'
class Navvy extends React.Component {

    render() {
        return (
            <div
                style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: "#1f2236"
                    // backgroundColor: '#7fff'
                    
                }}
            >
            <Link to="/">
                <img 
                    src={logo} 
                    width='auto'
                    height='100%'
                    alt="blog img"
                />
            </Link>
            </div>
        )
    }
}

export default Navvy