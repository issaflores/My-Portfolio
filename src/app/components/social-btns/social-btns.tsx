import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";


import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            
            <a href="https://www.linkedin.com/in/raissa-paiva-flores/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/issaflores">
                <GitHubIcon/>
            </a>
          
        </div>
    )
}