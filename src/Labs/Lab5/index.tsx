import { Container } from "react-bootstrap";
import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameter from "./QueryParameter";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWIthArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function Lab5() {
    return (
        <Container>
            <div id="wd-lab5">
                <h2>Lab 5</h2>
                <div className="list-group">
                    <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
                        Welcome
                    </a>
                </div>
                <hr />
                <EnvironmentVariables />
                <PathParameters />
                <QueryParameter />
                <WorkingWithObjects />
                <WorkingWithArrays />
                <HttpClient />
                <WorkingWithObjectsAsynchronously />
                <WorkingWithArraysAsynchronously />
            </div>
        </Container>
    );
}
