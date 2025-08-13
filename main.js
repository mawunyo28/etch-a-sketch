const container = document.querySelector("#container");

let grid = []; // Array of rows [[row1], [row2], ...]


if (container === null) {
  console.log("Container not found");
}


for (let i = 0; i < 4; i++) {
  let parent = document.createElement("div");
  parent.classList.add("row");
  let row = [];
  for (let j = 0; j < 4; j++) {
    let child = document.createElement("div");
    child.classList.add("row-child");
    parent.appendChild(child);
    row.push(child);
  }

  container.appendChild(parent);
  grid.push(row);


}
