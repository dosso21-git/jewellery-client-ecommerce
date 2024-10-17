import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Privacy-Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    link: "/terms&conditon",
  },
  {
    title: "Refund Policy",
    link: "/refund_policy",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 pb-20 pt-10 gap-8">
          {/* Company details */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={footerLogo} alt="Shopsy Logo" className="max-w-[50px]" />
              <h1 className="text-3xl font-bold">iridescentgems</h1>
            </div>
            <p className="text-gray-300">
              At Iridescent Gems, we create handcrafted jewellery inspired by nature's beauty. Discover unique pieces that add elegance to any occasion.
              Contact Us
              Have questions or need assistance? Reach out to us at <a href="#" className="text-blue-600 hover:underline">contact@iridescentgems.com.</a>
            </p>
          </div>
          {/* Footer Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Important Links */}
            <div>
              <h1 className="text-xl font-bold mb-4">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="text-gray-300 hover:text-primary transition duration-300 cursor-pointer">
                    <Link to={link.link}>{link.title}</Link> {/* Use Link component */}
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h1 className="text-xl font-bold mb-4">Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="text-gray-300 hover:text-primary transition duration-300 cursor-pointer">
                    <Link to={link.link}>{link.title}</Link> {/* Use Link component */}
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <div className="flex gap-4 text-gray-300">
                <a href="#"><FaInstagram className="text-3xl hover:text-primary transition" /></a>
                <a href="#"><FaFacebook className="text-3xl hover:text-primary transition" /></a>
                <a href="#"><FaLinkedin className="text-3xl hover:text-primary transition" /></a>
              </div>

              {/* Contact Details */}
              <div className="mt-8 text-gray-300">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;