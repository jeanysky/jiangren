
import Principleleft from "../../media/principleleft.png";
import Principleright1 from "../../media/principleright1.png";
import Principleright2 from "../../media/principleright2.png";
import Principle2 from "../../media/principle2.png";
import Principle3 from "../../media/principle3.png";
import Principle4 from "../../media/principle4.png";
import Principle5 from "../../media/principle5.png";
import "./Principle.css";

const Principle = () => (
    <div class="container_principle" id="principle">
        <span class="container_principle_lable">HOW SOLAR WORKS</span>
        <div class="container_principle_image">
            <div>
                <img class="container_principle_left" src={Principleleft} />
            </div>
            <div class="container_principle_right">
                <div>
                    <img class="container_principle_right1" src={Principleright1} />
                </div>
                <div>
                    <img class="container_principle_right1" src={Principleright2} />
                </div>
            </div>
        </div>

        <div>
            <img class="container_principle_image2" src={Principle2} />
        </div>
        <div class="container_principle_image3">
            <div>
                <img class="container_principle_part3" src={Principle3} />
            </div>
            <div>
                <img class="container_principle_part3" src={Principle4} />
            </div>
        </div>
        <div>
            <img class="container_principle_part4" src={Principle5} />
        </div>
    </div>
)

export default Principle;