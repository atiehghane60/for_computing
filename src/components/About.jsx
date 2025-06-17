import ImageGallery from "./ImageGallery";
import "./styles/About.css";

const imagesLeft = [
    "/images/gallery1/image1.png",
    "/images/gallery1/image2.jpg",
    "/images/gallery1/image3.jpg",
    "/images/gallery1/image4.jpg",
];

const imagesRight = [
    "/images/gallery2/image5.jpg",
    "/images/gallery2/image6.jpg",
    "/images/gallery2/image7.jpeg",
    "/images/gallery2/image8.jpg",
];

const About = () => (
  <section className="about">
    
    
    <div className="about-section">
      <ImageGallery images={imagesLeft} />
      <p>
      We are experts specializing in data-driven technologies, leading over 12 European projects with a budget exceeding 60 million euros. Our focus spans across various domains, including IT infrastructure, digital credentials, cloud computing, and blockchain integration, enhancing technological capabilities across Europe and beyond. </p>
    </div>
    <div className="about-section reverse">
      <p>
      At the helm of our initiatives is Vlado Stankovski, a Professor of Computer and Information Science with extensive experience in software engineering, cloud, edge, and fog computing, distributed systems, semantics, and artificial intelligence. Professor Stankovski has played pivotal roles in numerous national and international projects, including the Slovenian Supercomputing Centre consortium and Horizon 2020 software engineering clusters.  </p>
      <ImageGallery images={imagesRight} />
    </div>
  </section>
);

export default About;
