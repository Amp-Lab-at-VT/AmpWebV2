//https://react-icons.github.io/react-icons/icons?name=bs
import React, { useEffect } from "react";

import Navigation from "../../modules/Nav/Nav.jsx"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
// Faculty and Mentor Image Imports

import aboutMarkdown from "../../../assets/markdownDocs/mentor_steps.md"


import "./mentor_steps.css"

export default function MentorSteps() {
  const [text, setText] = React.useState();

  useEffect(() => {
    fetch(aboutMarkdown)
      .then((response) => response.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <header class="App-standardPage">
        <div class = "App-pageHelper">
        <ReactMarkdown class="App-standardPage" rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
        </div>
      </header>
    </div>
  );
}

