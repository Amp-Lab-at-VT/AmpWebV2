import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./project.css"

class ProjectBox extends Component {
    /*
    Expects an image prop, which is a string
    This will then generate a div with the image
    If the string is blank, the uid will be used instead

    Props needed: image, uid
    */

    constructor(props) {
        super(props);
        this.getDifference = this.getDifference.bind(this);
        this.state = {
            summary: "",
            summaryLoaded: false,
            imageExists: false,
            imagePath: "",
            base: ""
        };
    }


    getDifference(str1, str2) {
        let diff = "";
        str2.split('').forEach(function (val, i) {
            if (val !== str1.charAt(i))
                diff += val;
        });
        return diff;
    }


    componentDidMount() {
        var diff = this.getDifference("https://github.com/", this.props.href)
        this.setState({ base: diff })


        // Get the summary
        var possibleBranches = ['main', 'master']

        for (var i = 0; i < possibleBranches.length; i++) {
            var branch = possibleBranches[i]

            var fullSummary = "https://raw.githubusercontent.com/" +
                diff + "/" +
                branch + "/summary.md"

            // axios.get(fullSummary)
            // .then((response) => {
            //     if (response.status < 300 && response.status >= 200){
            //         this.setState({ summary: response.data })
            //         this.setState({ summaryLoaded: true })
            //     }
            // }).catch((response) => {
            //     console.log(this.props.name + " is not avalibe at that address. Warning: " + response)
            // });

            // Make an API call to find the name of the summary and hero image files
            // Then, use those names to find the files
            var apiURL = "https://api.github.com/repos/" + diff + "/git/trees/master?recursive=1"

            fetch(apiURL).then((response) => {
                if (response.ok) {
                    console.log(JSON.stringify(response.json()))
                  return response.json();
                }
                throw new Error('Something went wrong');
              })
              .then((responseJson) => {
                // Do something with the response
              })
              .catch((error) => {
                // console.log(error)
              });


            // find the path for the image, and choose whether to render it or not


            // check to see if the image exists at the url





            this.setState({ imagePath: "https://raw.githubusercontent.com/" + diff + "/" + branch + "/hero.png", imageExists: true })


        }
    }

    render() {
        // Simple div with a title and value
        if (this.props.image === undefined) {
            return (
                <a href={this.props.href} class="projectBox">
                    <div>
                        <div class="projectBoxTitle">
                            {this.props.name}
                        </div>
                        <div class="tinyMarkdown">
                            {this.state.summaryLoaded && <ReactMarkdown>{this.state.summary}</ReactMarkdown>}
                        </div>
                    </div>
                    {this.state.imageExists && <img class="projectBoxImage" alt={this.props.name} src={this.state.imagePath} ></img>}
                </a>
            )
        }
    }
}

export default ProjectBox;