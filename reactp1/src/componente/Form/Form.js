
import "./Form.css";

const Form = () => (
    <div class="container_get_quote" id="quotebutton">
        <form class=" container_get_quote_form">
            <div class="container_get_quote_lable">
                Talk to the solar experts
            </div>

            <div class="container_get_quote_discrible">
                The team at National Solar Energy is ready to answer your <br />
                &nbsp; &nbsp;&nbsp; &nbsp; questions. Get in touch with us for
                expert advice.
            </div>

            <div class="container_get_quote_element">
                <input type="text" class="container_get_quote_input" placeholder="Name" />
                <input type="text" class="container_get_quote_input" placeholder="Email" />
            </div>

            <div class="container_get_quote_element">
                <input type="text" class="container_get_quote_input" placeholder="Phone" />
                <input type="text" class="container_get_quote_input" placeholder="Postcode" />
            </div>

            <div>
                <input type="text" class="container_get_quote_message" placeholder="Message" />
            </div>

            <div>
                <input type="submit" class="container_get_quote_submit" value="Submit" />
            </div>
        </form>
    </div>
)

export default Form;