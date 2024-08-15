//rafce(react native snippets)
import React, { Component } from "react";
import Navbar from "../components/Movie.layout";
 const DefaultlayoutHoc =
  (Component) => 
    ({...props}) =>{
    return(
        <div>
            <Navbar/>
            <Component{...props}/>
            </div>
    )
 }
 export default DefaultlayoutHoc;
