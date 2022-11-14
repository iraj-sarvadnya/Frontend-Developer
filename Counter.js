import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="counter-section">
                <Row className="g-0">
                    <Col className="px-0 box-primary">
                        <div className="counter-box">
                            {counterOn && <CountUp start={1} end={184} duration={1} delay={0} />}
                            <h4>TOTAL LAUNCHES</h4>
                        </div>
                    </Col>
                    <Col className="px-0 box-dark">
                        <div className="counter-box">
                            {counterOn && <CountUp start={1} end={143} duration={3} delay={0} />}
                            <h4>TOTAL LANDINGS</h4>
                        </div>
                    </Col>
                    <Col className="px-0 box-primary">
                        <div className="counter-box">
                            {counterOn && <CountUp start={1} end={122} duration={3} delay={0} />}
                            <h4>TOTAL REFLIGHTS</h4>
                        </div>
                    </Col>
                </Row>
            </div>
        </ScrollTrigger>
    )
}
export default Counter;