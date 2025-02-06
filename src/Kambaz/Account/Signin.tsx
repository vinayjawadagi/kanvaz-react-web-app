import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>
            <Form.Control id="wd-username" placeholder="username" className="mb-2" />
            <br />
            <Form.Control
                id="wd-password"
                placeholder="password"
                type="password"
                className="mb-2"
            />
            <br />
            <Link
                id="wd-signin-btn"
                to="/Kambaz/Account/Profile"
                className="btn btn-danger w-100 mb-2"
            >
                Sign in{' '}
            </Link>
            <br />
            <Link
                id="wd-signup-btn"
                to="/Kambaz/Account/Signup"
                className="btn btn-primary w-100 mb-2"
            >
                Sign Up{' '}
            </Link>
        </div>
    );
}
