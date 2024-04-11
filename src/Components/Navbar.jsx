import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "../img/wobot_ai_logo.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Menu borderless fixed="top">
      <Link to="/">
        <Menu.Item>
          <img src={logo} alt="logo" /> <span className="hidden lg:block"><Menu.Item>Wobot.ai Recipes</Menu.Item></span>
        </Menu.Item>
      </Link>
      <Menu.Item name="Home" as={Link} to="/" />
      <Menu.Item name="Recipes" as={Link} to="/recipe" />
    </Menu>
  );
}

export default Navbar;
