import React, { Component } from "react";
import { Menu, MenuContents, Link } from "./CssComponents.js";
import AnchorLink from "react-anchor-link-smooth-scroll";


class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = { opacity: 0 };
        this.handleScroll = this.handleScroll.bind(this)
    }
    handleScroll() {
        let scrollOffset = window.scrollY - 200
        let newOpacity = 0
        if (scrollOffset > 0) {
            newOpacity = scrollOffset / 100 > 1 ? 1 : scrollOffset / 100
        }
        this.setState({ opacity: newOpacity })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    render() {


        return (
            <Menu style={{
                opacity: this.state.opacity
            }}>
                <MenuContents> <AnchorLink offset="80" href="#engineer">
                    <Link className="underline">
                        Engineer
                      </Link>
                </AnchorLink>{" "}|{" "}
                    <AnchorLink offset="80" href="#graphic">
                        <Link className="underline">
                            Graphic design
                      </Link>
                    </AnchorLink>{" "}|{" "}
                    <AnchorLink offset="80" href="#projects">
                        <Link className="underline">
                            Projects
                      </Link>
                    </AnchorLink>{" "}|{" "}<AnchorLink offset="80" href="#contact">
                        <Link className="underline">
                            Contact
                      </Link>
                    </AnchorLink> </MenuContents>
            </Menu >
        );
    }
}

export default MenuBar;
