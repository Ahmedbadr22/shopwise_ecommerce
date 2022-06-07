import "./navbar-style.css";
import logoImage from "../../images/logo_dark-3.png"

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logoImage} alt={"logo"}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <div className="navbar-toggler-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Categories
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Contact Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                About Us
                            </a>
                        </li>
                    </ul>
                    <div className="nav-action ms-lg-3">
                        <a href="/" className="nav-action-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </a>
                        <a href="/" className="cart nav-action-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                            <div className="cart-item-count">
                                0
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
