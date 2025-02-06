import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="container mt-4">
            <h3>Profile</h3>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-username">
                            Username
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            id="wd-username"
                            defaultValue="alice"
                            placeholder="username"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-password">
                            Password
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            id="wd-password"
                            type="password"
                            defaultValue="123"
                            placeholder="password"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-firstname">
                            First Name
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            id="wd-firstname"
                            defaultValue="Alice"
                            placeholder="First Name"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-lastname">
                            Last Name
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            id="wd-lastname"
                            defaultValue="Wonderland"
                            placeholder="Last Name"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-dob">
                            Date of Birth
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control id="wd-dob" type="date" defaultValue="2000-01-01" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col xs="auto">
                        <Form.Label column htmlFor="wd-email">
                            Email
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Control id="wd-email" type="email" defaultValue="alice@wonderland" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column htmlFor="wd-role">
                        Role
                    </Form.Label>
                    <Col>
                        <Form.Select id="wd-role" defaultValue="FACULTY">
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Link
                            id="wd-signout-btn"
                            to="/Kambaz/Account/SignIn"
                            className="btn btn-danger w-100 mb-2"
                        >
                            Sign Out{' '}
                        </Link>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}
