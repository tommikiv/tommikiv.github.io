import './Home.css';
import portraitImg from '../assets/images/portrait.jpg';
import gamelauncherImg from '../assets/images/gamelauncher.png';
import soulstealerImg from '../assets/images/soulstealer.png';
import goofusworkshopImg from '../assets/images/goofusworkshop.png';
import TechItem from '../components/TechItem';
import Project from '../components/Project';
import ContactForm from '../components/ContactForm';

import { Asterisk, Folder } from 'lucide-react';
import { SiReact, SiHtml5, SiCss3, SiTypescript, SiJavascript, SiElectron, SiGit, SiGithub, SiUnity, SiGodotengine } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container" id="home">
            <div className="about">
                <div className="text-section">
                    <h1>SOFTWARE<br /><span className="lower-title">DEVELOPER</span></h1>
                    <p>Yo! I'm Tommi and i love creating innovative software solutions, as well as learning new technologies and improving my skills. I also enjoy making games on the side.</p>
                </div>
                <div className="portrait">
                    <img src={portraitImg} alt="Portrait" />
                </div>
            </div>
            <div className="techstack">
                <h2 className="section-title"><Asterisk size={40} className="techstack-icon" />TECH STACK</h2>
                <div className="tech-container">
                    <h2 className="tech-category">FRONTEND</h2>
                    <div className="tech-list">
                        <TechItem name="React" icon={<SiReact size={40} />} />
                        <TechItem name="HTML5" icon={<SiHtml5 size={40} />} />
                        <TechItem name="CSS3" icon={<SiCss3 size={40} />} />
                        <TechItem name="TypeScript" icon={<SiTypescript size={40} />} />
                        <TechItem name="JavaScript" icon={<SiJavascript size={40} />} />
                    </div>
                </div>
                <div className="tech-container">
                    <h2 className="tech-category">BACKEND</h2>
                    <div className="tech-list">
                        <TechItem name="Electron" icon={<SiElectron size={40} />} />
                        <TechItem name="Java" icon={<FaJava size={40} />} />
                    </div>
                </div>
                <div className="tech-container">
                    <h2 className="tech-category">TOOLS</h2>
                    <div className="tech-list">
                        <TechItem name="Git" icon={<SiGit size={40} />} />
                        <TechItem name="GitHub" icon={<SiGithub size={40} />} />
                        <TechItem name="Unity" icon={<SiUnity size={40} />} />
                        <TechItem name="Godot" icon={<SiGodotengine size={40} />} />
                    </div>
                </div>
            </div>
            <div className="projects" id="projects">
                <h2 className="section-title"><Folder size={40} className="folder-icon" />PROJECTS</h2>
                <Project
                    title="Game Launcher"
                    description="A custom game launcher application built with Electron, providing a sleek interface to manage and launch your favorite games."
                    image={gamelauncherImg}
                    link="https://github.com/tommikiv/app-launcher"
                />
                <Project
                    title="SoulStealer"
                    description="A 3D top-down game developed in Unity as a part of my exchange studies. Play as a ghost and collect souls by scaring humans!"
                    image={soulstealerImg}
                    link="https://weakluck.itch.io/soul-stealer"
                />
                <Project 
                    title="Goofus Workshop"
                    description="A cozy 2D puzzle game made in Unity as a part of a 2 day game jam. Fix items that customers bring to your workshop!"
                    image={goofusworkshopImg}
                    link="https://immot.itch.io/goofus-workshop"
                />
            </div>
            <div className="contact" id="contact">
                <ContactForm />
            </div>
        </div>
    );
}

export default Home;