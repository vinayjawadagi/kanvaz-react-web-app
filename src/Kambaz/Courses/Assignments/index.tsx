import { ListGroup } from 'react-bootstrap';
import { BsGripVertical } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import LessonControlButtons from '../Modules/LessonControlButtons';
import AssignmentControl from './AssignemnetControl';
import AssignmentControlButtons from './AssignmentControlButtons';

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div id="wd-assignments">
                {' '}
                <AssignmentControl /> <br />{' '}
                <ListGroup className="rounded-0" id="wd-modules">
                    {' '}
                    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                        {' '}
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            {' '}
                            <BsGripVertical className="me-2 fs-3" /> <strong>ASSIGNMENTS</strong>{' '}
                            <AssignmentControlButtons />{' '}
                        </div>{' '}
                        <ListGroup className="wd-lessons rounded-0">
                            {' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />
                                <NavLink
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                >
                                    <strong>A1</strong>{' '}
                                </NavLink>
                                Multiple Modules | <strong>Not available until</strong> May 13 at
                                12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts{' '}
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />{' '}
                                <NavLink
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                >
                                    <strong>A2</strong>{' '}
                                </NavLink>
                                Multiple Modules | <strong>Not available until</strong> May 13 at
                                12:00am | <strong>Due</strong> May 15 at 11:59pm | 100 pts{' '}
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                            <ListGroup.Item className="wd-lesson p-3 ps-1">
                                {' '}
                                <BsGripVertical className="me-2 fs-3" />{' '}
                                <NavLink
                                    to="/Kambaz/Courses/1234/Assignments/123"
                                    id="wd-assignment-link"
                                >
                                    <strong>A3</strong>{' '}
                                </NavLink>
                                Multiple Modules | <strong>Not available until</strong> May 20 at
                                12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts{' '}
                                <LessonControlButtons />{' '}
                            </ListGroup.Item>{' '}
                        </ListGroup>{' '}
                    </ListGroup.Item>{' '}
                </ListGroup>{' '}
            </div>
        </div>
    );
}
