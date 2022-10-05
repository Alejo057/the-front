import React from "react";
import styles from "../styles/LanguagesList.module.scss";

const LanguagesList = (props) => {
    const languages = props.languages;
   return  <div className={styles.languagesContainer}>
       {languages.map((language: string, index: number) => {
           return <div key={index}>
               <svg className={language} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="6" cy="6" r="6"/>
               </svg>
               <span className={styles.language}>{language}</span>
           </div>
       })}
   </div>
}

export default LanguagesList;