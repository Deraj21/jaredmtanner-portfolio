import React, { useState } from "react"
import { useEffect } from "react"
import Markdown from "marked-react"


const base_url = "/jaredmtanner-portfolio/"

export default function Section(props) {

    let [markdownText, setMarkdownText] = useState('')

    useEffect(() => {
        // hey, look: it's an IIFE!
        (async function() {
            let res = await fetch(base_url + props.filePath)
                .catch(error => console.log(error))

            let text = await res.text()
            setMarkdownText(text)
        })()
    })

    return (
        <div className="Section">
            <a className="anchor" name={props.anchor}></a>
            <Markdown value={markdownText}  />
        </div>
    )
}