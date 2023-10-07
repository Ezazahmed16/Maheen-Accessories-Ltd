import React from 'react';

const ContactMap = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.921096979045!2d90.52729737413266!3d23.642996592893482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b3de1b585e4b%3A0x5896b6a7f7fae6ba!2sMaheen%20Accessories%20Ltd!5e0!3m2!1sen!2sbd!4v1696657122742!5m2!1sen!2sbd"
                width={350}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
            ></iframe>
        </div>
    );
};

export default ContactMap;
