import React, {Component} from "react";
// import Background from "../assets/img/ourHeader1.png";
// import Background from "../assets/img/ourHeader2.png";
import Background from "../assets/img/yellowBackground.png";

var sectionStyle = {
    width: "100%",
    height: "450px",
    backgroundPosition: 'right',
    backgroundImage: `url(${Background})`,
    backgroundSize:'cover'
};

class HeaderImage extends Component {
    render() {
        return (
            <section style={sectionStyle}>
            </section>
        );
    }
}

export default HeaderImage;
