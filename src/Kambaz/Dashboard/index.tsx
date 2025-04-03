import { useState } from 'react';
import { Button, Card, Col, FormControl, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEnrollment, deleteEnrollment } from './reducer';
export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: (course: any) => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isFaculty = currentUser.role === 'FACULTY';

    const [showEnrolled, setShowEnrolled] = useState(true);
    const isEnrolled = (courseId: any) =>
        enrollments.some(
            (enrollment: any) =>
                enrollment.user === currentUser._id && enrollment.course === courseId
        );
    const filteredCourses = courses;
    const dispatch = useDispatch();

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {isFaculty && (
                <h5>
                    New Course
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        onClick={updateCourse}
                        id="wd-update-course-click"
                    >
                        Update
                    </button>
                    <br />
                </h5>
            )}
            {isFaculty && (
                <div id="wd-dshboard-add-course-form">
                    <FormControl
                        value={course.name}
                        className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })}
                    />
                    <FormControl
                        as="textarea"
                        value={course.description}
                        rows={3}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })}
                    />
                    <hr />
                </div>
            )}
            <div id="wd-enrollments-button">
                <button
                    className="btn btn-primary float-end"
                    onClick={() => setShowEnrolled(!showEnrolled)}
                >
                    {showEnrolled ? 'Show All Courses' : 'Show Enrolled Courses'}
                </button>
            </div>
            <h2 id="wd-dashboard-published">Published Courses ({filteredCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {filteredCourses.map((course) => (
                        <Col
                            key={course._id}
                            className="wd-dashboard-course"
                            style={{ width: '300px' }}
                        >
                            <Card>
                                <Link
                                    to={`/Kambaz/Courses/${course._id}/Home`}
                                    className="wd-dashboard-course-link text-decoration-none text-dark"
                                >
                                    <Card.Img
                                        src="/images/reactjs.webp"
                                        variant="top"
                                        width="100%"
                                        height={160}
                                    />
                                    <Card.Body className="card-body">
                                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </Card.Title>
                                        <Card.Text
                                            className="wd-dashboard-course-description overflow-hidden"
                                            style={{ height: '100px' }}
                                        >
                                            {course.description}
                                        </Card.Text>
                                        <Button variant="primary"> Go </Button>
                                        {isFaculty && (
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}
                                                className="btn btn-danger float-end"
                                                id="wd-delete-course-click"
                                            >
                                                Delete
                                            </button>
                                        )}
                                        {isFaculty && (
                                            <button
                                                id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end"
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {!isFaculty && (
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    const enrollment = {
                                                        user: currentUser._id,
                                                        course: course._id,
                                                    };
                                                    if (isEnrolled(course._id)) {
                                                        dispatch(deleteEnrollment(enrollment));
                                                    } else {
                                                        dispatch(addEnrollment(enrollment));
                                                    }
                                                    console.log(enrollments);
                                                }}
                                                className={
                                                    isEnrolled(course._id)
                                                        ? 'btn btn-danger'
                                                        : 'btn btn-success'
                                                }
                                            >
                                                {isEnrolled(course._id) ? 'Unenroll' : 'Enroll'}
                                            </button>
                                        )}
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
