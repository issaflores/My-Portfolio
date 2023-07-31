import Image from 'next/image'
import "./header.scss"

export function header (){
    return(
        <div className="header">
          <div>
            <h1> Hi, i'm Raíssa! 👋 </h1>
            <h2> Developer frontend</h2>
      </div>
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />

      </div>
    )

}