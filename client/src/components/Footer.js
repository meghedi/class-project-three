import React from "react";
import { Container } from "reactstrap";

function DefaultFooter() {
  return (
    <footer className="footer" style={{padding:"50px", backgroundColor: "#FFD646"}} >
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed and coded by {" "}
          <a
            href="https://github.com/meghedi/class-project-three"
            target="_blank" rel="noopener noreferrer" 
          >
            Meghedi Hacopi, Kelli Uyeda, Randy Amos & Americ Ngwije
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DefaultFooter;