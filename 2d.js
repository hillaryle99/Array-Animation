// const rows = 10;
// const columns = 8;

// const myArray1 = [];

// for (let i = 0; i < rows; i++) {
//   myArray1[i] = [];
//   for (let j = 0; j < columns; j++) {
//     myArray1[i][j] = null;
//   }
// }
// console.log(myArray1);

// const myArray2 = new Array(rows);

// for (let i = 0; i < myArray2.length; i++) {
//   myArray2[i] = new Array(columns);
// }

// console.log(myArray2);

// const myArray3 = Array.from(Array(rows), () => new Array(columns));

// console.log(myArray3);

// const myArray4 = [[],[],[],[],[],[],[],[]];

// console.log(myArray4);

const initMatrix =[[1, 2, 3], [4, 5, 6]]
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable(initMatrix);
