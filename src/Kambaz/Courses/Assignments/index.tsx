import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import AssignmentControl from './AssignemnetControl';
import AssignmentControlButtons from './AssignmentControlButtons';
import * as assignmentsClient from './client';
import { addAssignment, deleteAssignment, setAssignments } from './reducer';

export default function Assignments() {
    const { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser.role === 'FACULTY';

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createAssignmentForCourse = async (assignment: any) => {
        try {
            const newAssignment = await assignmentsClient.createAssignment(
                cid as string,
                assignment
            );
            dispatch(addAssignment(newAssignment));
            handleClose();
        } catch (error) {
            console.error('Error creating assignment:', error);
        }
    };

    const removeAssignment = async (assignmentId: string) => {
        try {
            await assignmentsClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        } catch (error) {
            console.error('Error deleting assignment:', error);
        }
    };

    const handleAssignmentClick = (assignmentId: string) => {
        navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`);
    };

    const fetchAssignments = async () => {
        try {
            const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
            dispatch(setAssignments(assignments));
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    useEffect(() => {
        fetchAssignments();
    }, [cid]);

    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                {isFaculty && <AssignmentControl />}
                <br />
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>
                        </div>
                        <ListGroup className="wd-lessons rounded-0">
                            {assignments
                                .filter((assignment: any) => assignment.course === cid)

                                .map((assignment: any) => (
                                    <ListGroup.Item
                                        key={assignment._id}
                                        className="wd-lesson p-3 ps-1"
                                    >
                                        <BsGripVertical className="me-2 fs-3" />
                                        <NavLink
                                            to={`/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                            id="wd-assignment-link"
                                        >
                                            <strong>{assignment.title} </strong>
                                        </NavLink>
                                        Multiple Modules | <strong>Not available until</strong>
                                        {assignment.startdate} | <strong>Due</strong>{' '}
                                        {assignment.duedate}| 100 pts
                                        {isFaculty && (
                                            <AssignmentControlButtons
                                                assignmentId={assignment._id}
                                                deleteAssignment={(assignmentId) =>
                                                    dispatch(deleteAssignment(assignmentId))
                                                }
                                            />
                                        )}
                                    </ListGroup.Item>
                                ))}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}
