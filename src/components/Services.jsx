import './styles/Services.css';

const services = [
    {
        title: 'Micro-Credential Platform',
        description: 'We design and implement secure micro-credential platforms that issue verifiable digital certificates aligned with European standards such as EBSI and eIDAS 2.0.',
        image: '/images/gallery1/image1.png',
        link: '/services/service1'
    },
    {
        title: 'Construction Platform',
        description: 'We develop intelligent construction management platforms that streamline workflows, enhance collaboration, and digitize project processes from planning to delivery.',
        image: '/images/gallery1/image2.jpg',
        link: '/services/service2'
    },
    {
        title: 'Blockchain Consultation',
        description: 'We provide strategic blockchain consulting, from architecture design and smart contract development to governance models and secure decentralized solutions.',
        image: '/images/gallery1/image3.jpg',
        link: '/services/service3'
    },
    {
        title: 'Digital Identity',
        description: 'We build decentralized digital identity solutions using DIDs and Verifiable Credentials to enable trusted, compliant, and sovereign digital interactions.',
        image: '/images/gallery1/image4.jpg',
        link: '/services/service4'
    }
];

const Services = () => {
    return (
        <div className="services">
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-content">
                            <div className="service-text">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <a href={service.link} className="see-more" target='_blank'>See more <img src='/images/link.svg'/></a>
                            </div>
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
