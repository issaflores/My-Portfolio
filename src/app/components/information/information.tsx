import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Línguas"/>
        <div className="languages-info">
          <span> EN - Aprimorando o inglês para maior impacto profissional..</span>
          <span>PT-BR - Falante nativo</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>EAD - Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas - uniftec - Polo Gravataí/RS </span>
        </div>
      </div>
    )
}
