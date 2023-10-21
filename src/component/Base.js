import Navbar from "./Navbar";

const Base = ({title = "welcome to our site",children}) =>{

    return (
        <div className="container-fluid p-0 m-0">
            <Navbar></Navbar>
            {children}
            <h1>
                 this is footer
            </h1>
        </div>
    )
}
export default Base;