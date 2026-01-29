import './Project.css';

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

function Project(props: ProjectProps) {
    return (
        <div className="project">
            <div className="project-info">
                <h2 className="project-title">{props.title}</h2>
                <p className="project-text">{props.description}</p>
                <a href={props.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <img src={props.image} alt={props.title} className="project-image" />
        </div>
    );
}

export default Project;