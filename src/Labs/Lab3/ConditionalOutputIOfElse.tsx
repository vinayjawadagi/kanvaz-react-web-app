export default function ConditionalOutputIfElse() {
    const loggedIn = true;
    if (loggedIn) {
        return <h2 id="wd-conditional-output-if-else-welcome"> Welcome If ELse</h2>;
    } else {
        return <h2 id="wd-conditional-output-if-else-login"> Please login if else</h2>;
    }
}
