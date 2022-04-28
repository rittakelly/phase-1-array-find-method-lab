// code your solution here
// function superbowlWin(record) {
//     if (record.result === "W") {
//         return record.find(record.result);
//     }
// }

function superbowlWin(array) {
    let winningYear = array.find((array) => array.result === "W");
    if (winningYear) {
        return winningYear.year;
    }
}
superbowlWin(record);


// else if (item.find(year) !== '2015') {
//     return undefined;
// }