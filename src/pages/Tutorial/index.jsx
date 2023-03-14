//https://react-icons.github.io/react-icons/icons?name=bs
import React, { useEffect } from "react";

import Navigation from "../../comps/Nav/Nav.jsx"
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
// Faculty and Mentor Image Imports

// import aboutMarkdown from "../../../assets/markdownDocs/tutorial.md"

import styles from "./tutorial.module.css"

export default function Tutorial() {
  const [text, setText] = React.useState();

  // useEffect(() => {
  //   fetch(aboutMarkdown)
  //     .then((response) => response.text())
  //     .then((text) => {
  //       setText(text);
  //     });
  // }, []);

  return (
    <div>
      <Navigation></Navigation>
      <header class="App-standardPage">
        <div class = "App-pageHelper tutorialText">
        {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown> */}
        <text className = {styles.customText}>Hello</text>
        </div>
      </header>
    </div>
  );
}

