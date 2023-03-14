//https://react-icons.github.io/react-icons/icons?name=bs
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [showButton, setShowButton] = useState(false);


  return (
    <div class="App">
      <header class="App-header">
        <div class="App">
          <div class = "homeText">
            <Typewriter
            onInit={(typewriter)=> {
            typewriter.changeDelay("50")
            .pauseFor(250)
            .typeString("The AMP Lab at Virginia Tech")
            .pauseFor(500)
            .callFunction(() => {
              setShowButton(true);
            })
            .start();
            }}
            />
          </div>
          <div style = {{padding: "50px"} }>
          {(showButton && <a href="/getting_started" class = "btn">Getting Started</a>) ||
          (!showButton && <a href="/getting_started" style = {{visibility: "hidden"}} class = "btn">Getting Started</a>)}
          </div>
        </div>
      </header>
    </div>
  );
}

