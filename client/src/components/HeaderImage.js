import React, {Component} from "react";
// import Background from "../assets/img/ourHeader1.png";
// import Background from "../assets/img/ourHeader2.png";
import Background from "../assets/img/ourHeader.jpg";

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background})`
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
