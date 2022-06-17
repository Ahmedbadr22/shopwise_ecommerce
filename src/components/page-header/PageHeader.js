import "./page-header-style.css";
import {Breadcrumbs } from "@mui/material";

const PageHeader = ({sectionTitle}) =>{
    return(
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="page-title col-lg-6">
                        {sectionTitle}
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <Breadcrumbs
                            separator="/"
                            aria-label="breadcrumb"
                        >
                            <a className="breadcrumb-link" href="/">Home</a>
                            <a className="breadcrumb-link" href="/">Product Category</a>
                            <span>Product Name</span>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PageHeader;