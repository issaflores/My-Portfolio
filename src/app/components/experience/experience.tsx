import { SectionTitle } from "../sectionTitle/section-title"
import Image from "next/image"


import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>During the last year, I focused on studying HTML, CSS and JavaScript, achieving proficiency in these languages. I'm currently specializing in React and Angular to create high-performance web applications. I invite you to explore my portfolio to learn about my work and how I can add value to your project. Let's elevate digital experiences together!</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={1} years="1 years"/>
            <Skill image="/js.png" measure={1} years="1 years"/>
            <Skill image="/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}