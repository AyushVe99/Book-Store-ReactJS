import React, { useState, useEffect } from "react";
import MarkDown from "react-markdown";
import readmePath from "../data/README.md";

const About = () => {
  const [markDownText, setMarkDownText] = useState("");
  useEffect(() => {
    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setMarkDownText(text);
      });

    document.title = "About || React BookStore App";
  }, []);

  return (
    <div className="card container border-0">
      <div className="card-body">
        <div className="top-content text-center">
          <h1 className="display-4">Hello!</h1>
          <p className="lead">
            This is a React JS BookStore application using react router,
            context api, react hooks, bootstrap, and localStorage.
          </p>
          <hr className="my-4" />
        </div>
        
      </div>
      
    </div>
  );
};

export default About;
