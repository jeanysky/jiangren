import Caseimage from "../../media/case.png";
import "./Cass.css";

const Case = () => (
    <frameElement>
        <div class="container_case_lable" id="successfulcase">
            <span> Successful Case</span>
        </div>

        <div id="container_successful_case">
            <ul>
                <li>
                    <img src={Caseimage} />
                </li>
                <li>
                    <img src={Caseimage} />
                </li>
                <li>
                    <img src={Caseimage} />
                </li>
                <li>
                    <img src={Caseimage} />
                </li>
            </ul>
        </div>
    </frameElement>
)
export default Case;