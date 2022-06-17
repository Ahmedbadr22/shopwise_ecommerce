import {Avatar, Rating} from "@mui/material";
import avatarImage from "../../images/avatar.jpg";
import "./comment-style.css";

const Comment = () => {
    return (
        <div className="comment">
            <Avatar
                alt="Remy Sharp"
                src={avatarImage}
                sx={{ width: 60, height: 60 }}
            />
            <div className="comment-content">
                <div className="comment-header">
                    <strong>admin</strong>
                    <div className="rating-date">
                        <Rating
                            name="simple-controlled"
                            value={3}
                            readOnly
                        />
                        <span className="v-divider" />
                        <span className="date-time">April 19, 2020</span>
                    </div>
                </div>
                <div className="comment-text">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Comment;