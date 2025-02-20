import { FaAlignJustify } from 'react-icons/fa';
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router';
import { courses } from '../Database';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import Home from './Home';
import Modules from './Modules';
import CourseNavigation from './Navigation';
import PeopleTable from './People/Table';

export default function Courses() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name} &gt; {pathname.split('/')[4]}
            </h2>
            <hr />
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Zoom" element={<h2>Zoom</h2>} />
                        <Route path="Quizzes" element={<h2>Quizzes</h2>} />
                        <Route path="Grades" element={<h2>Grades</h2>} />
                        <Route path="Piazza" element={<h2>Piazza</h2>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
