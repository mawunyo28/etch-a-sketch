const container = document.querySelector("#container");
const button = document.createElement('button');

button.textContent = "Reload";

container.appendChild(button);

let grid = []; // Array of rows [[row1], [row2], ...]


if (container === null) {
  console.log("Container not found");
}

function generateGrid(rowNum, columnNum) {
  for (let i = 0; i < rowNum; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < columnNum; j++) {
      let cell = document.createElement("div");
      cell.classList.add("row-child");
      row.appendChild(cell);
    }

    container.insertBefore(row, button);
    grid.push(row);
  }

  grid.forEach((rows) => {

    for (let child of rows.children) {
      child.addEventListener('mouseover', (event) => {

        child.style.backgroundColor = getRandomizeHexColor();
        event.stopImmediatePropagation();
      })

    };
  })


}

function reloadGrid(rowNum, columnNum) {
  grid.forEach((row) => {
    for (let child of row.children) {
      row.removeChild(child);
    }
    container.removeChild(row);
  })

  grid = [];


  generateGrid(rowNum, columnNum);
}


function getRandomizeHexColor() {
  // 16777215 decimal for 0xffffff
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // convert to hex

  return "#" + randomColor.padStart(6, '0');
}

generateGrid(50, 50);

button.addEventListener('click', (event) => {
  let rowNumIn = parseInt(prompt("enter number or rows: \nMax is 100"));
  let columnNumIn = parseInt(prompt("enter number of columns: \nMax is 100"))

  let rowNum = 0;
  let columnNum = 0;

  if (rowNum < 100 && columnNum < 100) {
    rowNum = rowNumIn;
    columnNum = columnNumIn;
  }
  else {
    rowNum = 100;
    columnNum = 100;
  }

  reloadGrid(rowNum, columnNum);
  event.stopImmediatePropagation();
})

