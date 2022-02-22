import React ,{useState}from "react";
import './style.css'
import coverImage from "../../assets/cover/image-1.PNG"
function About(){
    const [showMore, setShowMore] = useState(false);
    const text = "I am the Director of Research Data Operations in Psychiatry at Columbia University. I provide comprehensive data services to researchers and my knowledge as a developer brings more flexibilities and customizations to my data solutions. In my spare time, I enjoying baking bread and playing cello with my children. Our favorite pieces are Bach's Cello Suites. My favorite recipe is the Pullman Sandwich Bread."
    return(
        <div className="home">
            <div className="title">
                <h1>
                    <h4 className="subtitle ">Hello, I'm</h4>
                    <h1>Grace Liu </h1>
                    <h4 className="subtitle">Full Stack Web Developer</h4>
                </h1>
  <p className="more">{showMore ? text : `${text.substring(0,0)}`}</p>
  <div  onClick={() => setShowMore(!showMore)}>{showMore ? <i class="fa-solid fa-circle-chevron-up"></i>: <i class="fa-solid fa-circle-chevron-down" ></i>}</div>    
            </div>
            <div className="person">
                <img src={coverImage}
                    alt="Grace Liu"/>
            </div>
        </div>
    )
}
export default About