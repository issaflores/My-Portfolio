import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, eu sou a Raíssa 👋</h1>
            <h2>Futura Desenvolvedora de software</h2>
          </div>
          <Image
            src="/me.jpg"
            alt="Vercel Logo"
            width={300}
            height={300}
            priority
          />
        </div>
    )
}
