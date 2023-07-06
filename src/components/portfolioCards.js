import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "03-JavaScript-Password-Generator",
    languages: "JavaScript, CSS, HTML",
    image: "",
    description: "Website showcasing a random password generator that outputs passwords based on a set of criteria with options selected by the user.",
    repo: "https://github.com/Jvn101/03-JavaScript-Password-Generator",

  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;