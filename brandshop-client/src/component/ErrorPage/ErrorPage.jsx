import { IoCarSportOutline } from "react-icons/io5";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <p className="flex justify-center text-center p-24 text-5xl font-semibold">4<IoCarSportOutline></IoCarSportOutline>4 NOT FOUND</p>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;