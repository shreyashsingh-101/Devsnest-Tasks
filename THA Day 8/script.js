let board = document.querySelector(".board");



window.onload = () => {
  for (let i = 0; i < 20; i++) {
    let row = document.createElement("div");
    row.className = "row";
    board.appendChild(row);
    for (let j = 0; j < 20; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }
  }
  

};

setTimeout(() => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            cell.style.background = cell.style.background == "white"?"rgb(206, 30, 30)":"white";
        })
    })
    
}, 100)








