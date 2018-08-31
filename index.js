// find body
let body = document.getElementsByTagName('body')[0]

// make a table for the grid
let grid = document.createElement('table')
//add table to document within body
body.appendChild(grid)

//Create event.target variable
const test = 'event.target'

// //Create a row element
function createRow() {
  let row = document.createElement('tr')
  return row
}

//Create table data elements
function createTD(number) {
  let tableData = document.createElement('td')

  return tableData
}

//Add Rows and for each element under table body. Add table data cells to each row. Currently 20x20
for (var i = 0; i < 20; i++) {
  grid.appendChild(createRow(i))
  let tableRow = document.getElementsByTagName('tr')[i]
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))
  tableRow.appendChild(createTD(i))

  //tableRow.appendChild(createTD(i))
  // tableRow.appendChild(createTD(i)).innerText = 'Table data2'

}

//Function to change class of event.target when a cell is clicked
var changeTargetBlue = function () {
  event.target.classList.add('blue')
  console.log('Click');
}

//Add addEventListener to the grid to detect event.target and change colors

grid.addEventListener('click', changeTargetBlue);

console.log('Test');
