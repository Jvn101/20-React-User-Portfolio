import React, {useState} from "react";
import Card from "./Card";

function Portfolio(){

const [portfolio] = useState([
  {
    title: "Password Generator",
    image: "/public/Images/passwordGenerator.png",
    description: "Website showcasing a random password generator that outputs passwords on user input.",
    repository: "https://github.com/Jvn101/03-JavaScript-Password-Generator",
    deployedlink: "https://jvn101.github.io/03-JavaScript-Password-Generator/"
  },
  {
    title: "Web APIs Code Quiz",
    image: "/public/Images/webAPIQuiz.png",
    description: "Timed quiz using JavaScript that stores high scores.",
    repository: "https://github.com/Jvn101/04-Web-APIs-Code-Quiz",
    deployedlink: "https://jvn101.github.io/04-Web-APIs-Code-Quiz/"
  },
  {
    title: "API Weather Dashboard",
    image: "/public/Images/weatherAPI.png",
    description: "Weather dashboard that features todays weather followed by a five day forecast.",
    repository: "https://github.com/Jvn101/06-Server-Side-APIs-Weather-Dashboard",
    deployedlink: "https://jvn101.github.io/06-Server-Side-APIs-Weather-Dashboard/"
  },
  {
    title: "Express.js Note Taker",
    image: "/public/Images/noteTaker.png",
    description: "This application is called Note Taker and can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. The project was created with code from edX Boot Camps.",
    repository: "https://github.com/Jvn101/11-Express.js-Note-Taker",
    deployedlink: "https://notetakerapplication-week11.herokuapp.com/"
  },
  {
    title: "MVC Tech Blog",
    image: "/public/Images/TheTechBlog.png",
    description: "This application is a CMS-style blog site (similar to a Wordpress site), where developers can publish their blog posts and comment on other developers posts as well.",
    repository: "https://github.com/Jvn101/14-MVC-Tech-Blog",
    deployedlink: ""
  },
  {
    title: "NoSQL Social Network",
    image: "/public/Images/NoSQLSocialNetwork.png",
    description: "This application ia an API for a social network web page where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    repository: "https://github.com/Jvn101/18-NoSQL-Social-Network-API",
    deployedlink: ""
  },
]);

  return (
    <div>
      <h1 class="pageHeading">Portfolio</h1>
      {portfolio.map((singlePortfolio, idx) => (
        <Card portfolio={singlePortfolio} key={"portfolio" + idx}/>
        ))}
    </div>
  );

};

export default Portfolio;