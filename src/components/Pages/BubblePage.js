import sprite from './spritesheet.png'
import "../stylesheets/BubblePage.css"; 

const BubblePage = () => {
   
    return ( 
        <div className="bubblePage">
            <img src={sprite}></img>
        </div>
     );
}
 
export default BubblePage;