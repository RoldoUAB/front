
import { Navbar } from "flowbite-react";
import LogoText from "../../assets/logo-text.png";
import HeaderElement from "./HeaderElement";

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/home">
        <img src={LogoText} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <HeaderElement toPage="/home" text="Home"></HeaderElement>
      </Navbar.Collapse>
    </Navbar>
  );
}
