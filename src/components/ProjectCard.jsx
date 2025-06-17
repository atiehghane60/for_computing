import React from "react";
import "./styles/ProjectCard.css";

const ProjectCard = ({ logo, title, subtitle, description, budget, link }) => {
    return (
        <div className="project-card">
            <div className="project-left">
                <div className="logo-container">
                    <img src={logo} alt={`${title} logo`} />
                </div>

                <div className="budget">
                    <p>Total budget</p>
                    <strong>{budget}</strong>
                </div>
            </div>
            <div className="project-right">
                <h3>
                    <span className="title">{title}</span>
                    <span className="subtitle"> {subtitle}</span>
                </h3>
                <p>{description}</p>
                <a href={link} className="see-more" target='_blank'>See more <img src='/images/link.svg'/></a>
            </div>
            
        </div>
    );
};

export default ProjectCard;
