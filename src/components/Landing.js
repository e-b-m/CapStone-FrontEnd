import caring from "../images/impact-of-caring.png"
import logo from "../images/TransparentLogo1.png"

const Landing = () => {

    
    return (  
        <div className="overlay">
            <div className="leftOverlay">
                <img src={logo}/>
                <p>Welcome to Orbit.</p>
                <p>Where we try our best at keeping you all in orbit.</p>
            </div>
            <img className="caringImg" src={caring}/>            
        </div>
    );
}
 
export default Landing;