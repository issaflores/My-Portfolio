import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span> EN - Improving English for greater professional impact.</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>EAD - Higher Technology Course in Systems Analysis and Development - uniftec university - Polo Gravataí/RS </span>
        </div>
      </div>
    )
}