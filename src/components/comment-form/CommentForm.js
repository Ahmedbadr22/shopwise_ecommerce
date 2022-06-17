import "./comment-form-style.css";
import {Button, Rating, TextField} from "@mui/material";
import {useState} from "react";

const CommentForm = () => {
    const [starsCount, setStarsCount] = useState(0);

    const handleStarsCountChange = (event, newStarValue) => {
        setStarsCount(newStarValue);
    }

    return (
        <div className="comment-form shadow mt-5 p-5">
            <span className="comment-form-title">Add a review</span>
            <div className="rating">
                <span>Your rating *</span>
                <Rating
                    name="simple-controlled"
                    value={starsCount}
                    onChange={handleStarsCountChange}
                    size={"large"}
                />
            </div>
            <div className="comment-form-content">
                <TextField
                    id="outlined-multiline-static"
                    label="Write Your Comment Here"
                    multiline
                    rows={5}
                    fullWidth={true}
                    color={"primary"}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                sx={{width: 150}}
            >
              Submit
            </Button>
        </div>
    );
};

export default CommentForm;