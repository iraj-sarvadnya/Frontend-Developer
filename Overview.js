import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Table } from "react-bootstrap";

const OverviewSlide = () => {
    return (
        <div className="banner-section">
            <Carousel>
                <Carousel.Item>
                    <img src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Fairings_Render_Desktop.webp" className="img-fluid" alt="FALCON 9" />
                    <Carousel.Caption>
                        <h2>
                            <span>FALCON 9</span>
                            OVERVIEW
                        </h2>
                        <Table striped bordered hover variant="dark" className="text-white mt-5">
                            <tbody>
                                <tr>
                                    <td className="text-start">HEIGHT</td>
                                    <td className="text-end">70m <span>/ 229.6 ft</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">DIAMETER</td>
                                    <td className="text-end">3.7m <span>/ 12 ft</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">MASS</td>
                                    <td className="text-end">549,054kg <span>/ 1,207,920 lb</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">PAYLOAD TO LEO</td>
                                    <td className="text-end">22,800 kg <span>/ 50,265 lb</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">PAYLOAD TO GTO</td>
                                    <td className="text-end">8,300 kg <span>/ 18,300 lb</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">PAYLOAD TO MARS</td>
                                    <td className="text-end">4,020 kg <span>/ 8,860 lb</span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S1_Render_Desktop.webp" className="img-fluid" alt="FALCON 9" />
                    <Carousel.Caption>
                        <h2>
                            <span>FALCON 9</span>
                            FIRST STAGE
                        </h2>
                        <ul className="mt-5">
                            <li><a href="#">OVERVIEW</a></li>
                            <li><a href="#">ENGINES</a></li>
                            <li><a href="#">LANDING LEGS</a></li>
                        </ul>
                        <p>Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.</p>
                        <p>Falcon 9 generates more than 1.7 million pounds of thrust at sea level.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9S2_Render_Desktop.webp" className="img-fluid" alt="FALCON 9" />
                    <Carousel.Caption>
                        <h2>
                            <span>FALCON 9</span>SECOND STAGE
                        </h2>
                        <p className="text-start">The second stage, powered by a single Merlin Vacuum Engine, delivers Falcon 9’s payload to the desired orbit. The second stage engine ignites a few seconds after stage separation, and can be restarted multiple times to place multiple payloads into different orbits.</p>
                        <Table striped bordered hover variant="dark" className="text-white mt-5">
                            <tbody>
                                <tr>
                                    <td className="text-start">NUMBER OF ENGINES</td>
                                    <td className="text-end">1 vacuum</td>
                                </tr>
                                <tr>
                                    <td className="text-start">BURN TIME</td>
                                    <td className="text-end">397 sec</td>
                                </tr>
                                <tr>
                                    <td className="text-start">THRUST</td>
                                    <td className="text-end">981 kN <span>/ 220,500 lbf</span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9Interstage_Render_Desktop.webp" className="img-fluid" alt="FALCON 9" />
                    <Carousel.Caption>
                        <h2><span>FALCON 9</span>INTERSTAGE</h2>
                        <p className="mt-5">The interstage is a composite structure that connects the first and second stages, and houses the pneumatic pushers that allow the first and second stage to separate during flight.</p>
                        <h3 className="text-start mt-5">GRID FINS</h3>
                        <p>Falcon 9 is equipped with four hypersonic grid fins positioned at the base of the interstage. They orient the rocket during reentry by moving the center of pressure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://www.spacex.com/static/images/falcon-9/desktop/WebsiteF9SoloFairings_Render_Desktop.webp" className="img-fluid" alt="FALCON 9" />
                    <Carousel.Caption>
                        <h2><span>FALCON 9</span>PAYLOAD</h2>
                        <ul className="mt-5">
                            <li><a href="#">FAIRING</a></li>
                            <li><a href="#">DRAGON</a></li>
                        </ul>
                        <p>Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, which can also accommodate secondary payloads.</p>
                        <p className="text-start"><a href="#" className="btn-read">Learn more about Dragon <FontAwesomeIcon icon={faCaretRight} /></a></p>
                        <Table striped bordered hover variant="dark" className="text-white mt-5">
                            <tbody>
                                <tr>
                                    <td className="text-start">HEIGHT</td>
                                    <td className="text-end">8.1 m <span>/ 26.6 ft</span></td>
                                </tr>
                                <tr>
                                    <td className="text-start">DIAMETER</td>
                                    <td className="text-end">3.7 m <span>/ 12 ft</span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default OverviewSlide;