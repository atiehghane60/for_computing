import React, { useRef, useEffect, useState } from "react";
import "./styles/Technologies.css";

const technologies = [
    {
        title: "Internet of Things (IoT)",
        description: `IoT refers to the network of physical devices, vehicles, appliances, and other items embedded with sensors, software, and connectivity that enable them to collect and exchange data.
IoT devices serve as edge nodes that gather and process data locally, reducing the amount of data sent to the cloud and improving response times for smart services.`,
        icon: "/images/tech_icons/iot.svg",
    },
    {
        title: "Artificial Intelligence (AI)",
        description: `AI encompasses various technologies and methodologies that allow systems to perform tasks requiring human-like intelligence, such as visual perception, speech recognition, decision-making, and language translation.
AI can be deployed in fog environments for real-time data analysis and decision-making locally rather than relying solely on cloud processing.`,
        icon: "/images/tech_icons/ai.svg",
    },
    {
        title: "Cloud Computing",
        description: `Cloud computing delivers computing services (servers, storage, databases, networking, software) over the internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale.
        While fog computing handles immediate data processing at the edge, cloud computing serves as a centralized resource for extensive data analytics and storage which cannot be processed locally.`,
        icon: "/images/tech_icons/cloud.svg",
    },
    {
        title: "Blockchain",
        description: `Blockchain is a decentralized digital ledger that records transactions across many computers in such a way that the registered transactions cannot be altered retroactively.
        Blockchain can provide transparency, security, and trust for transactions and operations in smart services, especially when dealing with multiple stakeholders.`,
        icon: "/images/tech_icons/blockchain.svg",
    },
    {
        title: "Containerization",
        description: `Containerization involves packaging an application with all its dependencies into a container that can run on any computing environment. Docker is a popular platform for this purpose.
        Containerization allows developers to create portable applications that can easily be deployed across different environments, simplifying DevOps practices and improving scalability.`,
        icon: "/images/tech_icons/container.svg",
    },
    {
        title: "Monitoring Tools",
        description: `Monitoring tools track the performance and availability of applications and infrastructure, gathering metrics to ensure systems operate effectively.
        Tools like Prometheus enable real-time monitoring of distributed applications across the fog and cloud, allowing for proactive management of operational metrics.`,
        icon: "/images/tech_icons/monitoring.svg",
    },
    {
        title: "Digital Twin",
        description: `A Digital Twin is a virtual representation of a physical object or system, designed to simulate its behavior in real-time by using data from sensors and IoT devices.
        Digital Twins leverage real-time data to optimize operations, monitor system health, and conduct simulations for predictive maintenance, seamlessly integrating with IoT and AI technologies.`,
        icon: "/images/tech_icons/digitaltwin.svg",
    }
];

const Technologies = () => {
    return (
        <div
            className="slider"
            style={{
                "--width": "240px",
                "--height": "320px",
                "--quantity": technologies.length,
            }}
        >
            <div className="list">
                {technologies.map((tech, index) => (
                    <div className="item" style={{ "--position": index + 1 }} key={index}>
                        <div className="card">
                            <div className="icon-container">
                                <img src={tech.icon} alt={tech.title} />
                            </div>
                            <h3>{tech.title}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Technologies;
