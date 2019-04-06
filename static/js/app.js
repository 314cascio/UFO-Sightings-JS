// from data.js
var tableData = data;

//from index.html
let tbody = d3.select("tbody");

//input data to table
function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        // Create list of table values    
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
    });
    })
}


//  Add event listener called handleClick
function handleClick() {
    d3.event.preventDefault();

    let date = d3.select('datetime').property('value');
    let filterData = tableData;

    // Conditional filter for search
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }

    buildTable(filterData);

}



d3.selectAll('#filter-btn').on('click', handleClick);

buildTable(tableData);




   