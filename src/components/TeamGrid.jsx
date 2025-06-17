import TeamCard from './TeamCard';
import './styles/TeamGrid.css';
import { useState, useEffect } from 'react';

const teamMembers = [
    {
        image: '/images/team_members/pouriya_miri.png',
        name: 'Pouriya Miri',
        role: 'Researcher',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        email: 'pouriya.miri98@gmail.com',
        website: 'https://pouriyamiri.github.io/'
    },
    {
        image: '/images/team_members/andrej_grebenc.png',
        name: 'Andrej Grebenc',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/mitja_potocar.png',
        name: 'Mitja Potočar',
        role: 'Full Stack Developer',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/svetlana_fuks.png',
        name: 'Svetlana Fuks',
        role: 'Researcher',
        bio: 'Pellentesque elementum quis nulla sed suscipit...',
        email: 'boblee@example.com',
        website: 'https://bobleedev.com'
    },
    {
        image: '',
        name: 'Vanja Mileski',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '',
        name: 'Luka Maček',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/atiyeh_ghane.jpg',
        name: 'Atiyeh Ghane',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/arvin_jusic.png',
        name: 'Arvin Jušić',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '',
        name: 'Gaber Polajnar',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '',
        name: 'Teodora Mishevska Kochovski',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/iztok_skof.png',
        name: 'Iztok Škof',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/harun_demir.png',
        name: 'Harun Demir',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '',
        name: 'Jernej Trnkoczy',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/petar_kochovski.png',
        name: 'Petar Kochovski',
        role: 'Researcher',
        bio: 'Researches blockchain technologies (DLT), decentralized systems, cloud computing, fog computing, verifiable credentials, and self-sovereign identities. Actively participates in several EU-funded projects covering these areas and can mentor students interested in completing bachelor’s, master’s, or doctoral theses in these fields.',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/vlado_stankovski.png',
        name: 'Vlado Stankovski',
        role: 'Researcher',
        bio: 'Vlado Stankovski is a Full Professor of Computer and Information Science at the University of Ljubljana’s Faculty of Computer and Information Science and serves as Vice-Dean for Economic Affairs. He has extensive expertise in software engineering, cloud, edge, and fog computing, distributed systems, semantics, and artificial intelligence. Active in numerous national and international projects, he is the scientific coordinator of the Next Generation Internet initiatives such, driving innovative research that shapes the future of digital technologies.',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/sandi_gec.png',
        name: 'Sandi Gec',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/olgun.jpg',
        name: 'Olgun Çiçek',
        role: 'Researcher',
        bio: 'Integer ut efficitur nisi, in tristique sem...',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    },
    {
        image: '/images/team_members/dejan_lavbic.png',
        name: 'Dejan Lavbič',
        role: 'Researcher',
        bio: 'I graduated in 2004 and received my PhD in 2010 in the field of computer science and informatics at the University of Ljubljana, Faculty of Computer Science and Informatics, where I am currently employed as a higher education teacher - assistant professor.In my research, I deal with intelligent agents, multi-agent systems, data pattern discovery, ontologies, semantic web, SSI, DID, VC, VP, distributed applications (DApps) and Splet3.I am a member of The Society of Digital Information and Wireless Communications (SDIWC) and the Slovenian Society of Informatics (SDI).',
        email: 'john@example.com',
        website: 'https://johndoe.com'
    }
];

const TeamGrid = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [cardsPerPage, setCardsPerPage] = useState(5);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('next');
    const [flippedIndices, setFlippedIndices] = useState(new Set());

    useEffect(() => {
        const updateCardsPerPage = () => {
            const width = window.innerWidth;
            if (width < 900) setCardsPerPage(1);
            else if (width < 1210) setCardsPerPage(2);
            else if (width < 1550) setCardsPerPage(3);
            else if (width < 1880) setCardsPerPage(4);
            else setCardsPerPage(5);
        };

        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    const totalPages = Math.ceil(teamMembers.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const currentMembers = teamMembers.slice(startIndex, startIndex + cardsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setDirection('next');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(prev => prev + 1);
                setFlippedIndices(new Set());
                setIsAnimating(false);
            }, 300);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setDirection('prev');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentPage(prev => prev - 1);
                setFlippedIndices(new Set());
                setIsAnimating(false);
            }, 300);
        }
    };

    const handleCardClick = (index) => {
        const globalIndex = startIndex + index;
        setFlippedIndices(prev => {
            const newSet = new Set(prev);
            if (newSet.has(globalIndex)) {
                newSet.delete(globalIndex);
            } else {
                newSet.add(globalIndex);
            }
            return newSet;
        });
    };

    return (
        <div className="team-grid-wrapper">
            <button className="nav-arrow left" onClick={prevPage} disabled={currentPage === 0}>
                <p style={{ fontFamily: "slick" }}>&#8592;</p>
            </button>

            <div className={`team-grid ${isAnimating ? (direction === 'next' ? 'slide-out-left' : 'slide-out-right') : ''}`}>
                {currentMembers.map((member, index) => (
                    <TeamCard
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                        bio={member.bio}
                        email={member.email}
                        website={member.website}
                        isFlipped={flippedIndices.has(startIndex + index)}
                        onCardClick={() => handleCardClick(index)}
                    />
                ))}
            </div>

            <button className="nav-arrow right" onClick={nextPage} disabled={currentPage === totalPages - 1}>
                <p style={{ fontFamily: "slick" }}>&#8594;</p>
            </button>
        </div>
    );
};

export default TeamGrid;
