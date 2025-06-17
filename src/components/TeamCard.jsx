import "./styles/TeamCard.css";

const Card = ({ image, name, role, bio, email, website, isFlipped, onCardClick }) => {
  const fallbackImage = "/images/user.png";
  const validImage = image && image.trim() !== '' ? image : fallbackImage;
  return (
    <div className={`team-card ${isFlipped ? "flipped" : ""}`} onClick={onCardClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src="images/flip.svg" className="flip-icon" alt="" />
          <img src={validImage} className="card-image" alt={name} />
          <hr className="card-divider" />
          <h3 className="team-card-name">{name}</h3>
          <p className="team-card-position">{role}</p>
        </div>
        <div className="card-back">
          <p className="team-card-bio">{bio}</p>
          <div className="contact-info">
            <a href={`mailto:${email}`} className="email-link">{email}</a>
            <a href={website} target="_blank" rel="noopener noreferrer" className="website-link">{website}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
