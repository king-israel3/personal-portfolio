import React, { useEffect, useRef, useState } from 'react'
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
        skillName: "Node.js", 
        skillLevel: 55,
        skillText: "I use Node.js for backend logic, route handling, and servers. I build CRUD APIs for user auth, profile edits, comment systems with a like feature, search function and a payment gateway for e-commerce websites.",
        // search function that returns relevant results
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
    const barRef = useRef(null)

    const [isVisible, setIsVisible] = useState(false);
    const [skillCounts, setSkillCounts] = useState(skillSets.map(() => 0)); // Initialize count for each skill

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // run once
                }
            },
            { threshold: 0.3 } // triggers when 30% visible
        );
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, []);

    // Animate number count for each skill
    useEffect(() => {
        if (isVisible) {
            const timers = skillSets.map((skill, index) => {
                const duration = 1500; // 1.5s total
                const increment = skill.skillLevel / (duration / 30);
                const counter = setInterval(() => {
                    setSkillCounts(prevCounts => {
                        const newCounts = [...prevCounts];
                        if (newCounts[index] + increment >= skill.skillLevel) {
                            clearInterval(counter);
                            newCounts[index] = skill.skillLevel;
                        } else {
                            newCounts[index] += increment;
                        }
                        return newCounts;
                    });
                }, 30);
                return counter;
            });

            return () => timers.forEach(timer => clearInterval(timer));
        }
    }, [isVisible]);
  return (
    <section id='skills' className='skills'>
        <h2 className='heading-text'>My Skills</h2>
        <main className='skillsets' ref={barRef}>
            {skillSets.map((skill, index) => (
                <div key={index} className='skillset'>
                    <div className='skill-name-icon-level'>
                        <p className='skill-name-icon'>
                            <span>{skill.skillName}</span>
                            <span>{skill.skillIcon}</span>
                        </p>
                        <p>{Math.round(skillCounts[index])}%</p>
                    </div>
                    <p className='skill-text'>{skill.skillText}</p>
                    <div className='skill-progress'>
                        <div className='skill-progressbar' style={{ width: isVisible ? `${skill.skillLevel}%` : '0%', transition: 'width 1.5s ease-in-out' }}></div>
                    </div>
                </div>
            ))}
        </main>
    </section>
  )
}

export default Skills