import React, { useState } from "react";
import "./styles/Accordion.css";

const publications = [
    {
      title:
        "Trust management in a blockchain based fog computing platform with trustless smart oracles",
      authors:
        "Petar Kochovski, Sandi Gec, Vlado Stankovski, Marko Bajec, Pavel D. Drobintsev",
      abstract:
        "Trust is a crucial aspect when cyber-physical systems have to rely on resources and services under ownership of various entities, such as in the case of Edge, Fog and Cloud computing...",
      journal: "Future Generation Computer Systems",
      date: "July 19, 2021",
      link: "#",
    },
    {
      title:
        "Drug traceability system based on semantic blockchain and on a reputation method",
      authors: "John Doe, Jane Smith",
      abstract:
        "This publication explores a traceability architecture using semantic blockchain technologies...",
      journal: "Generic Blockchain Journal",
      date: "January 12, 2023",
      link: "#",
    },
    {
      title:
        "Analiza nefunkcionalnih zahtev na primeru uporabe priporočilnega sistema pametnih pogodb",
      authors: "Author A, Author B",
      abstract:
        "This work addresses non-functional requirements for smart contract recommender systems...",
      journal: "Slovenian Computing Review",
      date: "October 3, 2022",
      link: "#",
    },
    {
      title:
        "Potential use of semantic blockchain technology in smart construction",
      authors: "Builder Bob, Tech Tara",
      abstract:
        "An investigation into how semantic blockchains can enhance data flow in construction projects...",
      journal: "Journal of Smart Infrastructure",
      date: "March 8, 2022",
      link: "#",
    },
    {
      title:
        "A recommender system for robust smart contract template classification",
      authors: "Data Guy, Logic Lisa",
      abstract:
        "The paper discusses a model for classifying smart contract templates based on robustness and usability...",
      journal: "AI & Blockchain Review",
      date: "June 27, 2022",
      link: "#",
    },
    {
      title:
        "Pareto-optimised fog storage services with novel service-level agreement specification",
      authors: "Cloudy Karl, Storage Sue",
      abstract:
        "We introduce a Pareto-based model for optimizing fog storage SLA configurations...",
      journal: "Distributed Systems Today",
      date: "April 15, 2023",
      link: "#",
    },
    {
      title:
        "Simulacija in izboljšava prometnih tokov : primer na dveh izbranih slovenskih križiščih",
      authors: "Janez Novak, Miha Kranjc",
      abstract:
        "This paper simulates and enhances traffic flow across selected intersections in Slovenia...",
      journal: "Slovene Transport Systems Journal",
      date: "May 5, 2023",
      link: "#",
    },
  ];
  export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [closingIndex, setClosingIndex] = useState(null);
  
    const toggleIndex = (index) => {
      if (index === activeIndex) {
        setClosingIndex(index);
        setTimeout(() => {
          setActiveIndex(null);
          setClosingIndex(null);
        }, 150); // Match fadeOut duration
      } else {
        setActiveIndex(index);
      }
    };
  
    return (
      <div className="accordion-container">
        {publications.map((pub, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleIndex(index)}>
              <span>{pub.title}</span>
              <span className={`chevron ${activeIndex === index ? "rotate" : ""}`}>▼</span>
            </div>
            {(activeIndex === index || closingIndex === index) && (
              <div className={`accordion-content ${closingIndex === index ? "fadeOut" : "fadeIn"}`}>
                <p><strong>Authors:</strong> {pub.authors}</p>
                <p><strong>Abstract:</strong> {pub.abstract}</p>
                <p><strong>Published:</strong> {pub.date}</p>
                <p><strong>Journal:</strong> {pub.journal}</p>
                <p>
                  <a href={pub.link} target="_blank" rel="noreferrer" className="publication-link">
                    See publication<img src="/images/link.svg" alt="" />
                  </a>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
