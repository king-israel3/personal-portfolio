import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';

const skillSets = [
    { 
        skillName: "HTML5", 
        skillLevel: 90,
        skillText: "I have a strong command of HTML5, forming the foundation of all my frontend work. From clean semantic markup to structuring complex layouts, I use HTML efficiently to build accessible and well-organized web content.",
        skillIcon: (<><FaHtml5 className='html'/></>)
    },
    { 
        skillName: "CSS3", 
        skillLevel: 80,
        skillText: "CSS3 is where I bring designs to life. I'm confident in styling responsive device layouts, implementing animations, and using modern techniques like Flexbox and Grid to create visually appealing, user-friendly interfaces.",
        skillIcon: (<><FaCss3Alt className='css'/></>)
    },
    { 
        skillName: "JavaScript", 
        skillLevel: 75,
        skillText: "JavaScript powers the interactivity in my projects. I'm well-versed with core JS concepts like DOM manipulation, ES6+ syntax, and event handling, and I use it to create dynamic web experiences with efficiency and clarity.",
        skillIcon: (<><FaJs className='js'/></>)
    },
    { 
        skillName: "React", 
        skillLevel: 60,
        skillText: "I'm actively developing my skills in React. I currently build components using hooks and props, manage basic state, and structure projects using reusable logic and clean JSX. I'm growing steadily in this area with each new project.",
        skillIcon: (<><FaReact className='react'/></>)
    },
    { 
        skillName: "Node JS", 
        skillLevel: 30,
        skillText: "I have a basic understanding of Node.js and have used it to set up simple backend logic, route handling, and servers. While I'm still in the early stages, I'm eager to deepen my knowledge of backend development.",
        skillIcon: (<><FaNodeJs className='node'/></>)
    },
    { 
        skillName: "GitHub", 
        skillLevel: 20,
        skillText: "While I've used GitHub for version control and hosting projects in the past, it's an area I'm revisiting. I'm familiar with basic commands and collaboration workflows, and I'm working on making Git a more active part of my dev process.",
        skillIcon: (<><FaGithub className='github'/></>)
    }
]

function Skills() {
  return (
    <section id='skills' className='skills'>
        <h2 className='heading-text'>My <span>Skills</span></h2>
        <main className='skillsets'>
            {/* we show the first 3 sets of skills */}
            <div className='skillsets-column'>
                {skillSets.slice(0,3).map((skillSets, index)=>(
                    <div key={index} className='skillset'>
                        <div className='skill-name-icon-level'>
                            <p className='skill-name-icon'>
                                <span>{skillSets.skillName}</span>
                                <span>{skillSets.skillIcon}</span>
                            </p>
                            <p>{skillSets.skillLevel}%</p>
                        </div>
                        <p className='skill-text'>{skillSets.skillText}</p>
                        <div className='skill-progress'>
                            <div className='skill-progressbar' style={{width: `${skillSets.skillLevel}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
            {/* we show the last 3 sets */}
            <div className='skillsets-column'>
                {skillSets.slice(3,6).map((skillSets, index)=>(
                    <div key={index} className='skillset'>
                        <div className='skill-name-icon-level'>
                            <p className='skill-name-icon'>
                                <span>{skillSets.skillName}</span>
                                <span>{skillSets.skillIcon}</span>
                            </p>
                            <p className='skill-text'>{skillSets.skillLevel}%</p>
                        </div>
                        <p>{skillSets.skillText}</p>
                        <div className='skill-progress'>
                            <div className='skill-progressbar' style={{width: `${skillSets.skillLevel}%`}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </section>
  )
}

export default Skills