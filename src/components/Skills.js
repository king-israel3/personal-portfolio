import React from 'react'
import { FaHtml5, FaCss3Alt, FaGithub, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';

const skillSets = [
    { 
        skillName: "HTML5",
        skillText: "I have a strong command of HTML5, forming the foundation of all my frontend work. From clean semantic markup to structuring complex layouts, I use HTML efficiently to build accessible and well-organized web content.",
        skillIcon: (<><FaHtml5 className='html'/></>)
    },
    { 
        skillName: "CSS3",
        skillText: "CSS3 is where I bring designs to life. I'm confident in styling responsive device layouts, implementing animations, and using modern techniques like Flexbox and Grid to create visually appealing, user-friendly interfaces.",
        skillIcon: (<><FaCss3Alt className='css'/></>)
    },
    { 
        skillName: "JavaScript",
        skillText: "JavaScript powers the interactivity in my projects. I'm well-versed with core JS concepts like DOM manipulation, ES6+ syntax, and event handling, and I use it to create dynamic web experiences with efficiency and clarity.",
        skillIcon: (<><FaJs className='js'/></>)
    },
    { 
        skillName: "React",
        skillText: "I build responsive user interfaces with React using reusable components, hooks, props, state management, and client-side routing. I focus on creating clean, maintainable code and interactive user experiences while continuously expanding my knowledge of the React ecosystem.",
        skillIcon: (<><FaReact className='react'/></>)
    },
    { 
        skillName: "Node.js",
        skillText: "I use Node.js and Express to build backend services, RESTful APIs, and authentication systems. My experience includes user registration and login, profile management, comment systems, search functionality, OTP verification, payment integration, and database-driven applications using MongoDB and PostgreSQL.",
        // search function that returns relevant results
        skillIcon: (<><FaNodeJs className='node'/></>)
    },
    { 
        skillName: "GitHub",
        skillText: "I use GitHub for version control, project management, and code hosting. I'm comfortable with essential Git workflows such as cloning repositories, creating commits, managing branches, resolving merge conflicts, and collaborating on projects while continuously improving my version control practices.",
        skillIcon: (<><FaGithub className='github'/></>)
    }
    // other skills to add later: redis, pgAdmin 4, postgreSQL
]

function Skills() {
  return (
    <section id='skills' className='skills'>
        <h2 className='heading-text' data-aos="zoom-in">My Skills</h2>
        <main className='skillsets'>
            {skillSets.map((skill, index) => (
                <div key={index} className='skillset'
                //  data-aos={ index % 4 === 0 ? "fade-right" : index % 4 === 1 ? "fade-left" : index % 4 === 2 ? "zoom-in" : "fade-up" }
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                >
                    <div className='skill-name-icon-level'>
                        <p className='skill-name-icon'>
                            <span>{skill.skillName}</span>
                            <span>{skill.skillIcon}</span>
                        </p>
                        {/* <p>{Math.round(skillCounts[index])}%</p> */}
                    </div>
                    <p className='skill-text'>{skill.skillText}</p>
                    {/* <div className='skill-progress'>
                        <div className='skill-progressbar' style={{ width: isVisible ? `${skill.skillLevel}%` : '0%', transition: 'width 1.5s ease-in-out' }}></div>
                    </div> */}
                </div>
            ))}
        </main>
    </section>
  )
}

export default Skills