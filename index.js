

function superbowlWin(record) {
    let win = record.find(record => record.result === "W")
    return win ? win.year : undefined
}
superbowlWin(record);
// console.log(superbowlWin(record)) // 2015