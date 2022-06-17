import React from 'react';
import {Breadcrumbs} from "@mui/material";
import "./page-header-style.css";

const MainPageHeader = ({sectionTitle, pageTitle}) => {
    return (
        <div className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span className="page-title d-flex align-items-center justify-content-center">
                            {sectionTitle}
                        </span>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <Breadcrumbs
                            separator="/"
                            aria-label="breadcrumb"
                        >
                            <a className="breadcrumb-link" href="/">Home</a>
                            <span>{pageTitle}</span>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPageHeader;