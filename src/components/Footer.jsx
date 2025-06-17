import './styles/Footer.css'
const Footer = () => {

    return (
        <div className="footer-wrapper">
            <hr/>
            <p className='footerParagraph'>© 2025 Fog Computing Group</p>
            <p className='footerParagraph'><img src='/images/phone.svg' className='icons'/>+123456789</p>
            <p className='footerParagraph'><img src='/images/contact_form/mail.svg' className='icons'/>someexampleemail@example.com</p>
        </div>
    );
};

export default Footer;
