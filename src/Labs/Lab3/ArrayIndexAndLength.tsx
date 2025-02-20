export default function ArrayIndexAndLength() {
    let nuumberArray1 = [1, 2, 3, 4, 5];
    const length1 = nuumberArray1.length;
    const index1 = nuumberArray1.indexOf(3);

    return (
        <div id="wd-array-indx-and-length">
            <h4>Array index and length</h4>
            length1 = {length1} <br />
            index1 = {index1} <hr />
        </div>
    );
}
