import { AiOutlineDashboard } from 'react-icons/ai';
import { FaCalendarAlt, FaInbox } from 'react-icons/fa';
import { FaRegCircleUser } from 'react-icons/fa6';
import { LiaBookSolid } from 'react-icons/lia';
import { SiYoutubestudio } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

export default function KambazNavigation() {
    return (
        <div
            id="wd-kambaz-navigation"
            style={{ width: 120 }}
            className="position-fixed list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
            // position-fixed bottom-0 top-0 d-none d-md-block z-2 bg-black
        >
            <a
                id="wd-neu-link"
                target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center"
            >
                <img src="/images/NEU.svg" width="75px" />
            </a>
            <br />
            <NavLink
                to="/Kambaz/Account"
                id="wd-account-link"
                className="list-group-item text-center border-0 bg-black text-white"
            >
                <FaRegCircleUser className="fs-1 text text-white" />
                <br />
                Account
            </NavLink>

            <NavLink
                to="/Kambaz/Dashboard"
                id="wd-dashboard-link"
                className={({ isActive }) => `
        list-group-item text-center border-0
        ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}
    `}
            >
                <AiOutlineDashboard className="fs-1 text-danger" />
                <br />
                Dashboard
            </NavLink>

            <NavLink
                to="/Kambaz/Dashboard"
                id="wd-course-link"
                className={({ isActive }) => `
        list-group-item text-center border-0
        ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}
    `}
            >
                <LiaBookSolid className="fs-1 text-danger" />
                <br />
                Courses
            </NavLink>

            <NavLink
                to="/Kambaz/Calendar"
                id="wd-calendar-link"
                className={({ isActive }) => `
        list-group-item text-center border-0
        ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}
    `}
            >
                <FaCalendarAlt className="fs-1-text-danger" /> <br />
                Calendar
            </NavLink>

            <NavLink
                to="/Kambaz/Inbox"
                id="wd-inbox-link"
                className={({ isActive }) => `
        list-group-item text-center border-0
        ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}
    `}
            >
                <FaInbox className="fs-1 text-danger" /> <br />
                Inbox
            </NavLink>

            <NavLink
                to="/Labs"
                id="wd-labs-link"
                className={({ isActive }) => `
        list-group-item text-center border-0
        ${isActive ? 'bg-white text-danger' : 'bg-black text-white'}
    `}
            >
                <SiYoutubestudio className="fs-1 text-danger" /> <br />
                Labs
            </NavLink>
        </div>
    );
}
