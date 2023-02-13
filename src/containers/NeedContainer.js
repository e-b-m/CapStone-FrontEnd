import NeedsList from "../components/Need/NeedList";

const  SERVER_URL = "http://localhost:8080/"

const NeedContainer = ({needs}) => {

    const [needs, setNeeds] = useState([]); 
    const [error, setError] = useState("");
  
    
    useEffect(() => {
      fetch(`${SERVER_URL}needs`)
      .then((response) => response.json())
      .then((data) => setNeeds(data))
      .catch((error) => setError(error.message))
    },  []);
    

    return (  
        <>
        <NeedsList needs={needs}/>
        </>
    );
}
 
export default NeedContainer;