import React,{useState} from "react";
import { faArrowCircleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons"; 
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ScrollButton = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <Button className="scrolltp-btn" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
       <FontAwesomeIcon icon={faArrowUp} />
      </Button>
    );
  }
    
  export default ScrollButton;