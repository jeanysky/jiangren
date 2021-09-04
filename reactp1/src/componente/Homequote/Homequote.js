import House from "../../media/house.png";
import "./Homequote.css";

const Homequote = () => (
    <div class="container_img">
        <div class="lablestyle">
            <span>Get the best value <br />solar panel installation</span>
        </div>

        <div class="quote">
            <div class="quote_img_div"><img class="quote_img" src={House} /></div>
            <div class="quote_words">
                <p>Get a solar system to power <br />your home and save on bills.</p>
            </div>
            <a href="#quotebutton">
                <div class="quote_button">
                    <span class="get_quote_button"> Get a quote </span>
                </div>
            </a>
        </div>
    </div>
)

export default Homequote;