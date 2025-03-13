import { FaSearch } from "react-icons/fa";

export function SearchBar() {
    return (
        <div className="input-group wd-search-bar">
            <span className="input-group-text" id="basic-addon1">
                <span className="me-1 position-relative">
                    <FaSearch
                        style={{ top: '-10px', left: '-8px' }}
                        className="text-secondary me-1 position-absolute fs-5"
                    />
                </span>
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search... "
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
        </div>
    );
}