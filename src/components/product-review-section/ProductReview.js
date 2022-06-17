import "./product-review-section-stylw.css";
import {Tab, Tabs} from "@mui/material";
import TabPanel from "../tab-panel/TabPanel";
import Comment from "../comment/Comment";
import CommentForm from "../comment-form/CommentForm";
import {useState} from "react";

const ProductReview = () => {
    const numberOfReviews = 1;
    const [tab, setTab] = useState(0);

    const handleTabChange = (event, selectedTab) => {
        setTab(selectedTab);
    };

    return (
        <div className="review-section container">
            <Tabs
                className="product-review"
                value={tab}
                onChange={(event, value) => handleTabChange(event, value)}
                textColor="primary"
                indicatorColor="primary"
                aria-label="secondary tabs example"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
                <Tab value={0} label="DESCRIPTION"/>
                <Tab value={1} label={`REVIEWS (${numberOfReviews})`} />
            </Tabs>
            <TabPanel
                displayItem={tab}
                index={0}
                content={
                    <div>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Vivamus bibendum magna Lorem ipsum dolor sit amet, consectetur adipiscing elit.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </div>
                }
            />
            <TabPanel
                displayItem={tab}
                index={1}
                content={
                    <div className="review-tab">
                        <h5>1 review for Itaque Earum Rerum</h5>
                        <div className="comment-section mt-4">
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                        <CommentForm />
                    </div>
                }
            />
            <hr style={{height: 4, opacity: 0.2}}/>
        </div>
    );
};

export default ProductReview;