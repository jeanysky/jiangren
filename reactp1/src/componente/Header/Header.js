
import "./Header.css";
import Logo from "./componente/Logo";
import Navigation from "./componente/Navigation";

const Header = () => (
    <header>
        <div class="container_navigation">
            <Logo />
            <Navigation />
        </div>
    </header>
)

export default Header;