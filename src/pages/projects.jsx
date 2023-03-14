import { useEffect, useState } from "react";
import axios from "axios";
import YAML from 'yaml'
import ProjectBox from "../comps/ProjectBox/ProjectBox.jsx"

export default function Projects() {
  const url =
    "https://raw.githubusercontent.com/Amp-Lab-at-VT/AmpWebV2/master/repos.yaml";

  const [projects, setProjects] = useState();

  useEffect(() => {

    axios.get(url).then((response) => {
      var items = YAML.parseDocument(response.data).contents.items;
      var allProjects = []

      Object.keys(items).forEach(function (key) {
          var name = (items[key]["key"]["value"]) //Gives us the project name
          var href = (items[key]['value']['items'][0]['value']['value']) //Gives us the project url
          var branch = (items[key]['value']['items'][1]['value']['value']) //Gives us the branch name
          allProjects.push(<ProjectBox branch = {branch} href={href} name={name}></ProjectBox>)
      });

      setProjects(allProjects)
    });
  }, []);

  return (
    <div class="App">
      <header class="App-standardPage">
        <div class="App-pageHelper">
        <text>Projects</text>
          <div class="flex-row-wrap">
            {projects}
          </div>
        </div>
      </header>
    </div>
  );
}

