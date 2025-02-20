export default function TemplateLiterals() {
    const five = 2 + 3;
    const result1 = '2 + 3 = ' + five;
    const result2 = `2 + 3 = ${2 + 3}`;
    const username = 'alice';
    const greetings1 = `Welcome home ${username}`;
    const loggedIn = false;
    const greetings2 = `Logged in; ${loggedIn ? 'Yes' : 'No'}`;

    return (
        <div id="wd-template-literals">
            <h4>Template literals</h4>
            result1 = {result1} <br />
            result2 = {result2} <br />
            greetings1 = {greetings1} <br />
            greetings2 = {greetings2} <hr />
        </div>
    );
}
