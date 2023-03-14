import React, { Component } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import styles from "./projectBox.module.css"

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

        var fullSummary = "https://raw.githubusercontent.com/" +
            diff + "/" +
            this.props.branch + "/summary.md"

        axios.get(fullSummary)
        .then((response) => {
            if (response.status < 300 && response.status >= 200){
                this.setState({ summary: response.data })
                this.setState({ summaryLoaded: true })
            }
        }).catch((response) => {
            console.log(this.props.name + " is not avalibe at that address. Warning: " + response)
        });

        var imgPath = "https://raw.githubusercontent.com/" + diff + "/" + this.props.branch + "/hero.png"

        axios.get(imgPath)
        .then((response) => {
            if (response.status < 300 && response.status >= 200){
                this.setState({ imageExists: true})
            }
        }).catch((response) => {
            console.log(this.props.name + " is not avalibe at that address. Warning: " + response)
        });

        this.setState({ imagePath: imgPath })

    }

    render() {
        // Simple div with a title and value
        if (this.props.image === undefined) {
            return (
                <a href={this.props.href} className={styles.projectBox}>

                    <div className = {styles.projectBoxText}>
                        <div className={styles.projectBoxTitle}>
                            {this.props.name}
                        </div>
                        <div className={styles.tinyMarkdown}>
                            {this.state.summaryLoaded && <ReactMarkdown>{this.state.summary}</ReactMarkdown>}
                        </div>
                    </div>
                    
                    <div className={styles.projectBoxImage}>
                    {this.state.imageExists && <img alt={this.props.name} src={this.state.imagePath} ></img>}
                    </div>
                </a>
            )
        }
    }
}

export default ProjectBox;