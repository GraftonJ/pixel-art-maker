// find body
let body = document.getElementsByTagName('body')[0]
// make a table for the grid
let grid = document.createElement('table')
//add table to document within body
body.appendChild(grid)

//Add table data cells 2x2 to start

// //Create a row element
function createRow() {
  let row = document.createElement('tr')
  return row
}

//Create table data elements
function createTD() {
  let tableData = document.createElement('td')
  return tableData
}

//Create table head elements
function createTH() {
  let tableHead = document.createElement('th')
  return tableHead
}

//Add Rows for each element under table body
for (var i = 0; i < 5; i++) {
  grid.appendChild(createRow(i))
     let tableRow = document.getElementsByTagName('tr')[i]
     tableRow.appendChild(createTD(i))
     tableRow.appendChild(createTD(i))
     //tableRow.appendChild(createTD(i))
  // tableRow.appendChild(createTD(i)).innerText = 'Table data2'

}
