import Navbar from "./Navbar";

const Base = ({title = "welcome to our site",children}) =>{

    return (
        <div className="container-fluid p-0 m-0">
            <Navbar></Navbar>
            {children}
            {/* <footer className="container-fluid p-0 m-0 bg-dark text-light">
                <h2>Footer</h2>
            </footer> */}
        </div>
    )
}
export default Base;