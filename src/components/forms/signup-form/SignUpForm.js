import {Button, Checkbox, FormControlLabel, TextField} from "@mui/material";
import "./signup-form-style.css";

const SignUpForm = () => {
    return (
        <div className="sign-up-section">
            <div className="form-card shadow rounded">
                <h2>Register</h2>
                <form className="sign-up-form mt-4" method="post">
                    <TextField
                        fullWidth
                        required
                        type={"text"}
                        id="outlined-required"
                        label="Username"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        type={"email"}
                        id="outlined-required"
                        label="Email"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <TextField
                        fullWidth
                        required
                        type={"password"}
                        id="outlined-required"
                        label="Password"
                        variant={"outlined"}
                        color={"primary"}
                    />
                    <div className="rem-for">
                        <FormControlLabel
                            label="I Am Agree With Terms"
                            control={<Checkbox  required/>}
                        />
                        <Button
                            variant="text"
                        >
                            Terms & Condition
                        </Button>
                    </div>
                    <Button
                        size={"large"}
                        type={"submit"}
                        variant="contained"
                        color={"primary"}
                    >
                        Register
                    </Button>
                </form>
                <div className="dont-have-acc mt-4">
                    I have an account ?
                    <span>
                        <Button
                            href='/'
                            variant="text"
                        >
                            Login
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;