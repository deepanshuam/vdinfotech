// lib
import React from "react";
import Link from "next/link";

// icons
import {
  FaRss,
  FaQuestionCircle,
  FaInfoCircle,
  FaUser,
  FaPhoneAlt,
  FaCalculator,
  FaRegNewspaper,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// styles
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

export default function Top() {
  return (
    <div className={styles.top}>
      <Container className={styles.top__container}>
        <ul className={styles.top__contact}>
          <li>
            <FaEnvelope />
            <span>support@vdinfotech.in</span>
          </li>
          <li>
            <FaPhoneAlt />
            <span>920-573-1999</span>
          </li>
        </ul>
        <ul className={styles.top__list}>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.link}>
                {link.icon && React.createElement(link.icon)}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.top__socialList}>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <Link target="_blank" href={item.link}>
                {item.icon && React.createElement(item.icon)}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

const links = [
  {
    name: "Blogs",
    icon: FaRss,
    link: "/blogs",
  },
  {
    name: "Faq's",
    icon: FaQuestionCircle,
    link: "/faq",
  },
  {
    name: "Career",
    icon: FaUser,
    link: "/career",
  },
  {
    name: "Enquiry",
    icon: FaInfoCircle,
    link: "/enquiry",
  },
  {
    name: "Contact",
    icon: FaPhoneAlt,
    link: "/contact",
  },
  {
    name: "Website Calculator",
    icon: FaCalculator,
    link: "",
  },
  {
    name: "News",
    icon: FaRegNewspaper ,
    link: "/website-calculator",
},
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/vdinfotech27",
  },
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/vdinfotech/about/",
  },
  {
    name: "XTwitter",
    icon: FaXTwitter,
    link: "https://twitter.com/VdInfotech27",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/vdinfotech.in/",
  },
  {
    name: "Pinterest",
    icon: FaPinterestP,
    link: "https://in.pinterest.com/vdinfotechvd",
  },
];
