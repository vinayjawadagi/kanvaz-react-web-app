function add(a: number, b: number) {
    return a + b;
}

export default function LegacyFunctions() {
    const sum = add(2, 4);
    console.log(sum);
    return (
        <div id="wd-legacy-functions">
            <h4>Functions</h4>
            <h5>Legacy ES5 Functions</h5>
            twoPLusFour = {sum} <br />
            add(2, 4) = {add(2, 4)} <hr />
        </div>
    );
}
