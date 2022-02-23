import React from "react";


function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      {/* to pass props from parent to child: create 'variableName' and assign to a value in parent component. use props.variableName in child component. see below. */}
      {/* <h2>favorite ice cream is: {props.iceCream}</h2>
      <h3>fav car is: {props.car}</h3>
      <h4>fav animal is: {props.animal}</h4>
      <h5>fav number is: {props.number}</h5> */}
    </div>
  );
}

export default Home;
