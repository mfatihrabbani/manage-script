import { useState } from "react"
import "./CardScript.css"

function CardScript({name, isActive}) {
    const [activedScript, setActivedScript] = useState(isActive)
    return (
        <>
            <div class="card-script">
                <h2>{name}</h2>
                <button onClick={() => {
                    if (activedScript){
                        setActivedScript(false)
                    }else{
                        setActivedScript(true)
                    }
                }}>
                    {
                        activedScript ?
                        "Turn off"
                        :
                        "Turn on"
                    }
                </button>
            </div>
        </>
    )
}

export default CardScript