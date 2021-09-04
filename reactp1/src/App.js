import "../src/App.css";
import Header from "./componente/Header/Header";
import Homequote from "./componente/Homequote/Homequote";
import Principle from "./componente/Principle/Principle";
import Case from "./componente/Case/Case";
import Form from "./componente/Form/Form";
import Footer from "./componente/Footer/Footer";
import { Fragment } from "react";

const App = () => (
  <Fragment>
    <Header />
    <Homequote />
    <Principle />
    <Case />
    <Form />
    <Footer />
  </Fragment>
)

export default App;