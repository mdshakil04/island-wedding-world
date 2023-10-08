import Banner from "../Banner/Banner";
import Destinations from "../Destinations/Destinations";
import Gallery from "../Gallery/Gallery";
import Services from "./Services/Services";
import WeddingPlanners from "./WeddingPlanners";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WeddingPlanners></WeddingPlanners>
            <Services></Services>
            <Destinations></Destinations>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;