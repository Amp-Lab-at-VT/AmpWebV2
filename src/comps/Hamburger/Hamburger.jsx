import React from 'react'
import styles from './burger.module.css'

import {AiOutlineMenu} from 'react-icons/ai'

export default function Hamburger() {
  return (
    <div className={styles.dropdown}>
      
      <button className={styles.dropbtn}> 
        <AiOutlineMenu className = {styles.dropdownIcon}></AiOutlineMenu>
      </button>
      <div className = {styles.dropdownContent}>
        <a href="/">Home</a>
        <a href="/getting_started">Getting Started</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/useful_as">Useful Links</a>
        <a href="/soldering">Soldering</a>
        {/* <Link to="/about">About</Link> */}
      </div>
    </div>
  )
}


