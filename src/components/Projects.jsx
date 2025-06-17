import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles/Projects.css";

const projects = [
  {
    logo: "/images/logos/ebsi_logo.svg",
    title: "EBSI-VECTOR",
    subtitle: "— Education and work reloaded",
    description: `Developing EBSI-enabled verifiable credentials and trusted registries 
    for cross-border use in education, 
    social security, and business. Managing stakeholders across domains with 20-country partners.`,
    budget: "€ 14.5 million",
    link: "https://ebsi-vector.eu/"
  },
  {
    logo: "/images/logos/buildchain.svg",
    title: "BUILDCHAIN",
    subtitle: "",
    description: `Designing a decentralized BIM-based knowledge platform for building lifecycles, we oversee a decentralized knowledge base for data exchange centered around the Building Information Model.`,
    budget: "€ 5 million",
    link: "https://buildchain-project.eu/"
  },
  {
    logo: "/images/logos/extremexp.svg", 
    title: "ExtremeXP",
    subtitle: "",
    description: `Integrating technologies for data analytics and knowledge engineering, this project, led by the University of Ljubljana, focuses on user-centric AI development with extremely high accuracy and precision.`,
    budget: "€ 10 million",
    link: "https://extremexp.eu/"
  },
  {
    logo: "/images/logos/noo-ultra.png", 
    title: "NOO ULTRA",
    subtitle: "",
    description: `Renewing higher education professional study programs at the University of Ljubljana by developing a prototype eIDAS2 compliant application for micro-credentials.`,
    budget: "€ 25 million",
    link: "https://www.uni-lj.si/studij/center-digitalna-ul/digitalna-pismenost-pedagogov-in-studentov"
  },
  {
    logo: "/images/logos/trustchain.svg",
    title: "TrustChain",
    subtitle: "",
    description: `Creating next-gen internet protocols and decentralized software, we develop W3C-compliant services using DID standards. The project includes 75 tech development initiatives.`,
    budget: "€ 12 million",
    link: "https://trustchain.ngi.eu/"
  },
  {
    logo: "/images/logos/swarmchestrate.svg", 
    title: "Swarmchestrate",
    subtitle: "",
    description: `Collecting and analysing large amounts of data in the Cloud-to-Edge computing continuum raises novel challenges. 
    Processing all this data centrally in cloud data centres is not feasible anymore as transferring large amounts of data to the c
    loud is time-consuming, expensive, degrade performance and may raise security concerns. Therefore, novel distributed computing paradigms, 
    such as edge and fog computing emerged to support processing data closer to its origin. 
    However, such hyper-distributed systems require fundamentally new methods`,
    budget: "€ 4.3 million",
    link: "https://www.swarmchestrate.eu/"
  },
  {
    logo: "/images/logos/essa.svg", 
    title: "ESSA",
    subtitle: "— European Software Skills Alliance",
    description: `Focusing on upskilling in high-demand software roles across Europe, we participate in designing and piloting VET (Vocational Education and Training) courses in software engineering.`,
    budget: "€ 8.5 million",
    link: "https://softwareskills.eu/"
  },
  {
    logo: "/images/logos/aces.svg", 
    title: "ACES",
    subtitle: "— Advanced Computing Ecosystem for Smart Cities",
    description: `ACES undertakes research and technological innovation to respond to the increasing
     need of edge-cloud computing and data management and the demand of edge services. 
     ACES edge-cloud data and application services have the potential to enable a 
     new infrastructure model, capable of guaranteeing end-to-end transaction resilience.`,
    budget: "€ 5.5 million",
    link: "https://www.aces-edge.eu/"
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      {projects.map((project, i) => (
        <ProjectCard key={i} {...project} />
      ))}
    </section>
  );
};

export default Projects;
