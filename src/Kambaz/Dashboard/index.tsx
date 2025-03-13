import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Dashboard({
    courses,
    newCourse,
    editMode,
    //setCourses,
    setNewCourse,
    setEditMode,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    newCourse: any;
    editMode: boolean;
    setCourses: (courses: any[]) => void;
    setNewCourse: (course: any) => void;
    setEditMode: (editMode: boolean) => void;
    addNewCourse: () => void;
    deleteCourse: (courseId: string) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    // const { enrollments } = db;

    const userRole = currentUser.role;
    const [showAllCourses, setShowAllCourses] = useState(false);
    const [enrollments, setEnrollments] = useState<Array<{ user: string; course: string }>>(() => {
        return JSON.parse(localStorage.getItem('enrollments') || '[]');
    });

    useEffect(() => {
        localStorage.setItem('enrollments', JSON.stringify(enrollments));
    }, [enrollments]);

    const toggleEnrollment = (courseId: string) => {
        setEnrollments((prev) => {
            const isEnrolled = prev.some(
                (enrollment) =>
                    enrollment.user === currentUser._id && enrollment.course === courseId
            );
            if (isEnrolled) {
                return prev.filter(
                    (enrollment) =>
                        !(enrollment.user === currentUser._id && enrollment.course === courseId)
                );
            } else {
                return [...prev, { user: currentUser._id, course: courseId }];
            }
        });
    };

    const userEnrolledCourses = courses.filter((course: any) =>
        enrollments.some(
            (enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id
        )
    );

    return (
        <div className="p-4" id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center">
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <button
                    className="btn btn-primary"
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    {showAllCourses ? 'Enrolled Courses' : 'All Courses'}
                </button>
            </div>
            <hr />
            {userRole === 'FACULTY' && (
                <div className="d-flex align-items-start mb-3">
                    <h5 className="me-3">{editMode ? 'Edit Course' : 'New Course'}</h5>
                    <div className="flex-grow-1">
                        <input
                            type="text"
                            className="form-control mb-2"
                            value={newCourse.name}
                            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                        />
                        <textarea
                            className="form-control"
                            rows={3}
                            value={newCourse.description}
                            onChange={(e) =>
                                setNewCourse({ ...newCourse, description: e.target.value })
                            }
                        />
                    </div>
                    {editMode ? (
                        <button className="btn btn-warning ms-3" onClick={updateCourse}>
                            Update
                        </button>
                    ) : (
                        <button className="btn btn-primary ms-3" onClick={addNewCourse}>
                            Add
                        </button>
                    )}
                </div>
            )}
            <hr />
            <h2 id="wd-dashboard-published">
                {showAllCourses
                    ? `All Courses (${courses.length})`
                    : `Published Courses (${userEnrolledCourses.length})`}
            </h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {(showAllCourses ? courses : userEnrolledCourses).map((course) => {
                    const isEnrolled = enrollments.some(
                        (enrollment) =>
                            enrollment.user === currentUser._id && enrollment.course === course._id
                    );

                    return (
                        <div key={course._id} className="col">
                            <div className="card" style={{ width: '100%' }}>
                                <Link
                                    to={
                                        userRole === 'FACULTY'
                                            ? `/Kambaz/Courses/${course._id}/Home`
                                            : isEnrolled
                                            ? `/Kambaz/Courses/${course._id}/Home`
                                            : '#'
                                    }
                                    className="text-decoration-none text-dark"
                                    onClick={(e) => {
                                        if (userRole !== 'FACULTY' && !isEnrolled) {
                                            e.preventDefault();
                                            alert('You must be enrolled to access this course.');
                                        }
                                    }}
                                >
                                    <img
                                        src={course.image || `/images/react.svg`}
                                        alt="Course"
                                        style={{ width: '100%', height: '160px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-nowrap overflow-hidden">
                                            {course.name}
                                        </h5>
                                        <p
                                            className="card-text overflow-hidden"
                                            style={{ height: '100px' }}
                                        >
                                            {course.description}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Button variant="primary" className="btn-lg">
                                                Go
                                            </Button>
                                            {userRole === 'FACULTY' ? (
                                                <div>
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            deleteCourse(course._id);
                                                        }}
                                                        className="btn btn-danger btn-lg me-2"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            setNewCourse(course);
                                                            setEditMode(true);
                                                        }}
                                                        className="btn btn-warning btn-lg"
                                                    >
                                                        Edit
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    className={`btn btn-lg ${
                                                        isEnrolled ? 'btn-danger' : 'btn-success'
                                                    }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleEnrollment(course._id);
                                                    }}
                                                >
                                                    {isEnrolled ? 'Unenroll' : 'Enroll'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
