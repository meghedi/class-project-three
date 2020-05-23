import React from "react";
import { Container } from "reactstrap";

// const styles = {
//     footerStyle: {
//       position: "relative",
//       padding: 10,
//       textAlign:"center",
//       borderTop: "1px solid #ccc",
//       marginTop:30
//     }
//   };

// function Footer(){
//     return(
//   <footer style={styles.footerStyle}>
//       Done by Americ, Kelli, Randy and Meg @2020
//   </footer>
//     )
// }

// export default Footer;

function DefaultFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and coded {" "}
          <a
            href="https://github.com/meghedi/class-project-three"
            target="_blank" rel="noopener noreferrer" 
          >
            Meghedi Hacopi, Kelli , Randy Amos & Americ Ngwije
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DefaultFooter;