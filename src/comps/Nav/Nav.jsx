import React from "react";
import styles from './nav.module.css'


import Hamburger from "../Hamburger/Hamburger.jsx"

export default function Navigation({fileContents}) {

    return (
    <div className={styles.navbar}>
        <div className={styles.parentNav}>
            <div style={{display : "flex", alignItems: "center"}}>
                <Hamburger fileContents = {fileContents}></Hamburger>
            </div>
            <div style={{display : "flex", alignItems: "center"}}>
            </div>
        </div>
    </div>
    );
};
