import React from "react";
import './NavBar.css';


const NavBar = props => (
    <header className="w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
        <nav className="navbar mb-1 navigation">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">NHL Clicks</a>
            </div>
            <ul className="nav navbar-nav">
                <a href="https://github.com/drewpepin1995/clicky-game">GitHub Repo</a>
            </ul>
        </nav>
    </header>
)

export default NavBar;