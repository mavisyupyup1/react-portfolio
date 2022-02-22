import React ,{useState}from "react";
import './style.css'
import coverImage from "../../assets/cover/image-1.PNG"
function Home(){

    return(
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle ">Hello, I'm</h4>
                    <h1>Grace Liu </h1>
                    <h4 className="subtitle">Full Stack Web Developer</h4>
                </h1>
              
                <div className="arrow mt-5" ><i class="fa-solid fa-circle-chevron-down" ></i></div>
            
            </div>
    
            <div className="person">
                <img src={coverImage}
                    alt="Grace Liu"
                />
            </div>
        </div>
    )
}

export default Home