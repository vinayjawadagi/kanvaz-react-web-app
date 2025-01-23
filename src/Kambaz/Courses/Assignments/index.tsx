import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link">
            A1 - ENV + HTML
          </Link>
          <ul>
            Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |{' '}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </ul>
        </li>
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link>
          <ul>
            Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |{' '}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </ul>
        </li>
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/123" id="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link>
          <ul>
            Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |{' '}
            <strong>Due</strong> May 20 at 11:59pm | 100 pts
          </ul>
        </li>
      </ul>
    </div>
  );
}
