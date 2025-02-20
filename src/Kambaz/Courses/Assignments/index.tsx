import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { NavLink, useParams } from 'react-router-dom';
import * as db from '../../Database';
import LessonControlButtons from '../Modules/LessonControlButtons';
import AssignmentControl from './AssignemnetControl';
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === cid);
    const course = db.courses.find((course) => course._id === cid);

    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                <AssignmentControl /> <br />
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>
                            <AssignmentControlButtons />
                        </div>
                        <ListGroup className="wd-lessons rounded-0">
                            {assignments.map((assignment) => (
                                <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <NavLink
                                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                                        id="wd-assignment-link"
                                    >
                                        <strong>{assignment.title} </strong>
                                    </NavLink>{' '}
                                    Multiple Modules | <strong>Not available until</strong>{' '}
                                    {assignment.startdate} | <strong>Due</strong>{' '}
                                    {assignment.duedate}
                                    | 100 pts
                                    <LessonControlButtons />
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
}
