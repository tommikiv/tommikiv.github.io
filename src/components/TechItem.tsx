import React from 'react';
import './TechItem.css';

interface TechItemProps {
    name: string;
    icon: React.ReactNode;
}

function TechItem(props: TechItemProps) {
    return <div className="tech-item">
        {props.icon}
        <h2>{props.name}</h2>
    </div>;
}

export default TechItem;