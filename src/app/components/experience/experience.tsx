import { SectionTitle } from "../sectionTitle/section-title"
import Image from "next/image"


import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiência"/>
          <p>Durante o último ano, foquei no estudo de HTML, CSS e JavaScript, obtendo proficiência nessas linguagens. Atualmente estou me especializando em React e Angular para criar aplicações web de alto desempenho. E como posso agregar valor ao seu projeto? Vamos elevar as experiências digitais juntos!</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 years"/>
            <Skill image="/ts.png" measure={1} years="1 years"/>
            <Skill image="/js.png" measure={1} years="1 years"/>
            <Skill image="/java.png" measure={1} years="1 year"/>
          </div>
        </div>
    )
}
