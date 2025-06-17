import './styles/Services.css';

const services = [
    {
        title: 'Service name',
        description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut efficitur nisi, in tristique sem.  Integer ut efficitur nisi, in tristique sem.',
        image: '/images/gallery1/image1.png',
        link: '/services/service1'
    },
    {
        title: 'Service name',
        description: 'Lorem ipsum Lorem ipsum  Suspendisse sed augue am. Pellentesque elementum quis nulla sed suscipit. Vestibulum lectus leo, efficitur quis ligula non, feugiat ornare sem. Proin luctus porttitor felis sit amet dapibus. Fusce et sapien vulputate eros cursus ornare. Duis ultrices risus sit amet nulla interdum tempus. Sed  sit amet, consectetur adipiscing elit. Integer ut efficitur nisi, in tristique sem.',
        image: '/images/gallery1/image2.jpg',
        link: '/services/service2'
    },
    {
        title: 'Service name',
        description: 'Lorem  sit amet nulla interdum tempus. Sed  sit amet, consectetur adipiscing elit. Integer ut efficitur nisi, in tristique sem.',
        image: '/images/gallery1/image3.jpg',
        link: '/services/service3'
    },
    {
        title: 'Service name',
        description: 'Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut efficitur nisi, in tristique sem. Suspendisse sed augue a mi gravida malesuada eget sit amet diam. Pellentesque elementum quis nulla sed suscipit. Vestibulum lectus leo, efficitur quis ligula non, feugiat ornare sem. Proin luctus porttitor felis sit amet dapibus. Fusce et sapien vulputate eros cursus ornare. Duis ultrices risus sit amet nulla interdum tempus. Sed  sit amet, consectetur adipiscing elit. Integer ut efficitur nisi, in tristique sem.',
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
