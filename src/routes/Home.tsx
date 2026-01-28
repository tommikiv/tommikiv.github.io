import './Home.css';
import portraitImg from '../assets/images/portrait.jpg';
import TechItem from '../components/TechItem';

import { Asterisk } from 'lucide-react';
import { SiReact, SiHtml5, SiCss3, SiTypescript, SiJavascript, SiElectron, SiGit, SiGithub, SiUnity, SiGodotengine } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Home() {
    return (
        <div className="home-container" id="home">
            <div className="about">
                <div className="text-section">
                    <h1>SOFTWARE<br /><span className="lower-title">DEVELOPER</span></h1>
                    <p>Yo! I'm Tommi and i love creating innovative software solutions, as well as learning new technologies and improving my skills. I also enjoy making games on the side</p>
                </div>
                <div className="portrait">
                    <img src={portraitImg} alt="Portrait" />
                </div>
            </div>
            <div className="techstack">
                <h2 className="techstack-title"><Asterisk size={40} className="techstack-icon" /> TECH STACK</h2>
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
        </div>
    );
}

export default Home;