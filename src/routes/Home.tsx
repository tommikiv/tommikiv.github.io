import portraitImg from '../assets/images/portrait.jpg';
import './Home.css';

function Home() {
    return (
        <div className="home-container" id="home">
            <div className="about">
                <div className="text-section">
                    <h1>Software Developer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="portrait">
                    <img src={portraitImg} alt="Portrait" />
                </div>
            </div>
        </div>
    );
}

export default Home;