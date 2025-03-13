import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAssignment, updateAssignment } from './reducer'; // Redux actions

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

    // State for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState(0);
    const [duedate, setDueDate] = useState('');
    const [startdate, setAvailableFrom] = useState('');
    const [availableuntil, setAvailableUntil] = useState('');

    // Check if we are editing an existing assignment
    useEffect(() => {
        if (aid !== 'New') {
            const assignment = assignments.find((a: any) => a._id === aid);
            if (assignment) {
                setTitle(assignment.title || '');
                setDescription(assignment.description || '');
                setPoints(assignment.points || 0);
                setDueDate(assignment.duedate || '');
                setAvailableFrom(assignment.startdate || '');
                setAvailableUntil(assignment.availableuntil || '');
            }
        } else {
            // Reset form for new assignment
            setTitle('');
            setDescription('');
            setPoints(0);
            setDueDate('');
            setAvailableFrom('');
            setAvailableUntil('');
        }
    }, [aid, assignments]);

    const handleSave = () => {
        const newAssignment = {
            title,
            description,
            points,
            duedate,
            startdate,
            availableuntil,
            courseId: cid,
        };
        // const newAssignment = {
        //     title: 'New Assignment',
        //     description: 'Description of the assignment',
        //     course: 'RS101',
        //     duedate: '2025-05-01',
        //     startdate: '2025-04-01',
        //     availableuntil: '2025-05-15', // Ensure this is passed correctly
        // };

        if (aid === 'New') {
            dispatch(addAssignment(newAssignment));
        } else {
            dispatch(updateAssignment(newAssignment));
        }

        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <Container className="mt-4">
            <h2>{aid === 'New' ? 'Create Assignment' : 'Edit Assignment'}</h2>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Assignment Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Description
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Points
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="number"
                            value={points}
                            onChange={(e) => setPoints(Number(e.target.value))}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Due Date
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="date"
                            value={Date.parse(duedate)}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Available From
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="date"
                            value={Date.parse(startdate)}
                            onChange={(e) => setAvailableFrom(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                        Available Until
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="date"
                            value={Date.parse(availableuntil)}
                            onChange={(e) => setAvailableUntil(e.target.value)}
                        />
                    </Col>
                </Form.Group>

                <Row className="mt-4">
                    <Col className="d-flex justify-content-end">
                        <Button
                            variant="secondary"
                            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
                        >
                            Cancel
                        </Button>
                        <Button className="ms-2" variant="primary" onClick={handleSave}>
                            Save Assignment
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
