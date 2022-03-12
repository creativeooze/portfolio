import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: [
                'Java Developer',
                'Python Developer',
                'Salesforce Developer',
                'React Js Developer',
            ]
        })
    }, [])
    return (
        <div className='intro' id="intro">
            <div className='left'>
                <div className='imgContainer'>
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi there, I am</h2>
                    <h1>Anshuman Nanda</h1>
                    <h3>I am a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
