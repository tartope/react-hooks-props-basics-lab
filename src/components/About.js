import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {
  if(!props.bio){
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links github={user.links.github} linkedin={user.links.linkedin} />
      
      </div>
    );
  }else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links github={user.links.github} linkedin={user.links.linkedin} />
      </div>
    );
  }
}

export default About;
