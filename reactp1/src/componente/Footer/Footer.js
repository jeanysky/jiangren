import { Fragment } from "react";
import Contact from "./componente/Contact";
import Connect from "./componente/Connect";
import Map from "./componente/Map";
import "./Footer.css";

const Footer = () => (
    <Fragment>
        <div class="container_contact" id="contact">
            <Contact />
            <Connect />
            <Map />
        </div>
    </Fragment>
)

export default Footer;