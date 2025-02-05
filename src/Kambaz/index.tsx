import { Navigate, Route, Routes } from 'react-router';
import Account from './Account';
import Courses from './Courses';
import Dashboard from './Dashboard';
import KambazNavigation from './Navigation';

export default function Kambaz() {
    return (
        <div>
            <KambazNavigation />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    <Route path="/Calendar" element={<h1>Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
            </div>
        </div>
    );
}
