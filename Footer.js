import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import img from '../img/footer-rocket.png';
function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col md={3}>
                            <img src={img} className="img-fluid" />
                        </Col>
                        <Col md={9}>
                            <div className="footer-content">
                                <h2 className="text-start">FALCON 9</h2>
                                <p className="text-start">For information about our launch services, contact <a href="mailto:sales@spacex.com">sales@spacex.com</a></p>
                                <div className="text-start">
                                    <a href="#" className="btn-more">DOWNLOAD USERS GUIDE</a>
                                    <a href="#" className="btn-more">CAPABILITIES AND SERVICES</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright-footer">
                    <Container>
                        <p>SPACEX © 2022 | Design & Developed by <span>Gopal Shende</span></p>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer;