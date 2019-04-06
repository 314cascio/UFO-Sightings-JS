// from data.js
var tableData = data;
console.log(tableData)

//from index.html
var $table = document.querySelector("#ufo-table");

//input data to table
for (var i = 0; i < tableData.length; i++) {
    var ufo = tableData[i];
    var fields = Object.keys(ufo);
    var rowIndex = 0;
    // Create a new row in the table, set the index to be 0

    var $row = $table.insertRow(rowIndex);
    for (var j = 0; j < fields.length; j++) {
        // For every field in the ufo object, create a new cell at set its inner text to be the current value at the current ufo's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = ufo[field];
    }
    rowIndex++;
 }

