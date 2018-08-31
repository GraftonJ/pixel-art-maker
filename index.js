// find body
let body = document.getElementsByTagName('body')[0]

// make a table for the grid
let grid = document.createElement('table')

//find Palette
let palette = document.getElementsByTagName('div')[0]

//Find currentColor
let currentColor = document.getElementsByTagName('div')[4]

//set
let redSwatch = document.getElementsByTagName('div')[1]

//This variable is used to choose the current color based on the palette color clicked. It needs to equal the color of the event.target. It should reference a css class containing only backgound or background color, otherwise it will insert the circle color from the palette. Use an if statement and the event.target name to set this variable
let selectedColor = ''

//add table to document within body
body.appendChild(grid)

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

//Function to change color event.target when a cell is clicked
var changeTargetBlue = function () {
  event.target.style.backgroundColor = selectedColor
  console.log('Change table data function is working');
}

//Add addEventListener to the grid to detect event.target and change colors
grid.addEventListener('click', changeTargetBlue);

//Function to change class of currentColor. Need to be able to choose the correct color to add as a parameter based on the event.target. Need to update selectedColor based on the event.target.
var test = function () {
  selectedColor = event.target.getAttribute('id')
  currentColor.style.backgroundColor = selectedColor
  console.log(`The selected color is ${selectedColor}`)
  console.log('test function is working')
}

//Event listener to change current color to the same color as the palette swatch that was clicked
palette.addEventListener('click', test)

//document.getElementsByTagName('div')[4].style.backgroundColor = 'teal'
//"teal" changes the currentColor to teal. write a function that looks at an event listener on the color palet and sets the color to the name of the color clicked. You coudld name each color and then use some "getElementByName" method as the color variable.
