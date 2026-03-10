let table;

function generateTable() {
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;

    table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.innerHTML = `R${i+1}C${j+1}`;
        }
    }

    document.getElementById("tableContainer").innerHTML = "";
    document.getElementById("tableContainer").appendChild(table);
}

function addRow() {
    if (!table) return;

    let cols = table.rows[0].cells.length;
    let row = table.insertRow();
    let rowNumber = table.rows.length;

    for (let i = 0; i < cols; i++) {
        let cell = row.insertCell();
        cell.innerHTML = `R${rowNumber}C${i+1}`;
    }
}

function deleteRow() {
    if (table && table.rows.length > 0) {
        table.deleteRow(-1);
    }
}

function highlightEvenRows() {
    if (!table) return;

    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].classList.remove("highlight");

        if ((i + 1) % 2 === 0) {
            table.rows[i].classList.add("highlight");
        }
    }
}