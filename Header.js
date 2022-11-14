import video from '../img/space_video.mp4'
import poster from '../img/poster.jpg';
import Navigation from '../Component/Navbar';
import { Container } from 'react-bootstrap';
function Header() {
    return (
        <div className='header'>
            <div className='video-header'>
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    poster={poster}></video>
            </div>
            <Navigation />
            <div className='banner-caption'>
                <Container>
                    <h1>FALCON 9</h1>
                    <p>FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</p>
                </Container>
            </div>

        </div>
    )
}
export default Header;