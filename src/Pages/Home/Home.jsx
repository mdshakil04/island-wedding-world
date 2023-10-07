import Banner from "../Banner/Banner";
import Services from "./Services/Services";
import WeddingPlanners from "./WeddingPlanners";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WeddingPlanners></WeddingPlanners>
            <Services></Services>
        </div>
    );
};

export default Home;