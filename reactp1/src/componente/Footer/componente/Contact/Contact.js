import "./Contact.css";
import Smartphone from "../../../../media/smartphone.png";
import Mail from "../../../../media/mail.png";
import Certificate from "../../../../media/certificate.png";
import { Fragment } from "react";

const Contact = () => (
    <div>
        <div class="container_contact_lable">Contact </div>
        <div>
            <img class="container_contact_detail" src={Smartphone} />
            <div class="container_contact_detail1">0451********</div>
        </div>

        <div>
            <img class="container_contact_detail" src={Mail} />
            <div class="container_contact_detail1"> 88 Pitt Street Sydney 2000</div>
        </div>

        <div>
            <img class="container_contact_detail" src={Certificate} />
            <div class="container_contact_detail1">SA Electrical Contractor Lic:
                PGE
                268526
            </div>
        </div>
    </div>
)

export default Contact;