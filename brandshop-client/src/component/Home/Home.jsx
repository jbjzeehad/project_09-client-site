import About from "../About/About";
import Accessories from "../Accessories/Accessories";
import Banner from "../Banner/Banner";
import Dealer from "../Dealer/Dealer";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Accessories></Accessories>
            <Dealer></Dealer>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;