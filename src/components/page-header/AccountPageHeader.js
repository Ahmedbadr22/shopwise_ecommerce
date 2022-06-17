import React from 'react';
import {Breadcrumbs} from "@mui/material";
import "./page-header-style.css"

const AccountPageHeader = ({sectionTitle}) => {
    return (
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
                            <span>My Account</span>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPageHeader;