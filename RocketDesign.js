import { Container } from "react-bootstrap"
import imgspace from '../img/rocket-d-design.png';
const RocketDesign = () => {
    return (
        <>
            <div className="space-section">
                <Container>
                    <img src={imgspace} alt="" className="img-fluid" />
                    <p>Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.</p>
                </Container>
            </div>
        </>
    )
}
export default RocketDesign;