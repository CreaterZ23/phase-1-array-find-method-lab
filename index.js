// const record = [
//     { year: 2018, result: "L" }, { year: 2017, result: "W" }, { year: 2016, result: "N/A" }
// ];

// function superbowlWin(record) {
//     if (record.result === "W") {
//         return record.year;
//     }
// }



// record.find(superbowlWin);


function superbowlWin(recordArr) {
    const lastWinObj = recordArr.find(season => season.result === "W");
    console.log(lastWinObj);
    return lastWinObj ? lastWinObj.year : undefined;


}