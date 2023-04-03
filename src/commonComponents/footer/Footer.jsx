import React from "react";
import "./Footer.scss";
import Container from "./../container/Container";
import { logo, facebook, insta } from "./../../assests";
import Text from "./../text/Text";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="lg">
          <img src={logo} alt="logo" />
          <div className="footer-container">
            <div className="footer-container-left">
              <Text className="uppercase">
                {`Occasion Base UK Ltd. Company registration number 09309515`.toUpperCase()}
              </Text>
              <Text className="upppercase">
                {`4.7 of 5 by 1223 reviews on Trustpilot`.toUpperCase()}
              </Text>
            </div>
            <div className="footer-container-right">
              <Link to="/aboutus">{`about us`.toUpperCase()}</Link>
              <Link to="/aboutus">{`sign as a vender`.toUpperCase()}</Link>
              <Link to="/aboutus">{`faq`.toUpperCase()}</Link>
              <Link to="/aboutus">{`Get In Touch`.toUpperCase()}</Link>
              <div className="social-icon">
                <img src={insta} alt="insta" style={{ marginTop: "-0.5rem" }} />
                <img
                  src={facebook}
                  alt="facebook"
                  style={{ marginTop: "-0.5rem" }}
                />
              </div>
              <Link to="/aboutus">{`support`.toUpperCase()}</Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
