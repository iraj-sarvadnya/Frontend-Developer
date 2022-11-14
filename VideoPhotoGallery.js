import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import LightBox from "./LightBox";
import videoImg from '../img/play-video.jpg';
function VideoPhotoGallery() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="gallery-section">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <h2 className="mb-3 text-start">Photo Gallery</h2>
                            <LightBox />
                        </Col>
                        <Col lg={5}>
                            <h2 className="mb-3 text-start">Video</h2>
                            <div className="inner-video">
                                <img src={videoImg} alt="Falcon 9" className="img-fluid" />
                                <Button className="youtube-btn bounce" onClick={handleShow}><FontAwesomeIcon icon={faCaretRight} /></Button>
                                <h3>FALCON 9 FLIGHT - VIDEO</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>FALCON 9 FLIGHT - VIDEO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe style={{ width: "100%", height: "350px" }} src="https://www.youtube.com/embed/Z4TXCZG_NEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default VideoPhotoGallery;