import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const layout = ({children}) => {
    return (
        <>
            <Header />
            <Navbar />
            {children}
        </>
    );
};

export default layout;