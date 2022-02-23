import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* to pass props from parent to child: create 'variableName' and assign to a value in parent component. use props.variableName in child component. see below. */}
      <Home name={user.name} city={user.city} color={user.color} /> {/* <-- inside <Home component/>: iceCream={"chocolate"} car={'wrx'} animal={'cat'} number={1} */}
      <About bio={user.bio} links={user.links}/>
    </div>
  );
}

export default App;
