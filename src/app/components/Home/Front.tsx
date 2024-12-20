import { Button } from "@mui/material";
import React from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTiktok,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: <FontAwesomeIcon icon={faFacebook} />,
    url: "https://www.facebook.com",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    url: "https://www.instagram.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    url: "https://www.linkedin.com",
  },
  {
    icon: <FontAwesomeIcon icon={faWhatsapp} />,
    url: "https://www.whatsapp.com",
  },
  { icon: <FontAwesomeIcon icon={faTiktok} />, url: "https://www.tiktok.com" },
  {
    icon: <FontAwesomeIcon icon={faBehance} />,
    url: "https://www.behance.net",
  },
];

const Front: React.FC = () => {
  return (
    <div className="front">
      <div className="front-center">
        <h1>Coming Soon</h1>
        <p>
          Transform your space with our unique, handmade designs that add{" "}
          <span>elegance</span> and <span>character</span>.
        </p>
        <Button variant="outlined" color="primary">
          Follow
        </Button>
      </div>
      <div className="front-contact">
        <div className="social-icons">
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              {link.icon}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Front;
