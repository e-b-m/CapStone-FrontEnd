import CareeList from "../components/Caree/CareeList";

const  SERVER_URL = "http://localhost:8080/"

const CareeContainer = ({carees}) => {

    const [error, setError] = useState("");
    const [carees, setCarees] = useState([]); 

    useEffect(() => {
      fetch(`${SERVER_URL}carees`)
      .then((response) => response.json())
      .then((data) => setCarees(data))
      .catch((error) => setError(error.message))
    },  []);

    return( 
        <>
        <CareeList carees={carees}/>
        </>

     );
}
 
export default CareeContainer;