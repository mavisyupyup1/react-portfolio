import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"
function About(){
    return(
        <section className="my-5">
            <h1 id="about">Hi, I am Grace! I am the Director of Research Data Operations in the Department of Psychiatry at Columbia University and (soon to become) a full-stack developer. I provide comprehensive data services to researchers and I am hoping my knowledge as a developer brings more flexibilities and customizations to my data solutions. In my spare time, I enjoying baking bread and playing cello with my children. Our favorite pieces are Bach's Cello Suites. My favorite recipe is the Pullman Sandwich Bread.</h1>
            <img src={coverImage} className="my-2" style ={{width:"100%"}} alt="cover"></img>
        </section>
    )
}

export default About;