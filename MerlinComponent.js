import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import img from '../img/merlin.jpg';
function MerlinComponent() {
    return (
        <>
            <section className="merlin-section">
                <Row className="g-0">
                    <Col className="box-gray" md={6}>
                        <img src={img} alt="" className="img-fluid" />
                    </Col>
                    <Col className="box-primery" xs={6}>
                        <h2 className="text-start mt-5 text-white"><span>ENGINES</span>MERLIN</h2>
                        <ul className="mt-5">
                            <li><a href="#">SEA LEVEL</a></li>
                            <li><a href="#">VACUUM</a></li>
                        </ul>
                        <p className="mt-3 text-white">Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.</p>
                        <Table striped bordered hover className="mt-5 text-white">
                            <tbody>
                                <tr>
                                    <td className="text-start text-white">PROPELLANT</td>
                                    <td className="text-end text-white">LOX <span>/ RP-1</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start text-white">THRUST</td>
                                    <td className="text-end text-white">845 kN <span>/ 190,000 lbf</span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default MerlinComponent;