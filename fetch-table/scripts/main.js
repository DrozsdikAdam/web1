const table = document.querySelector('table.table');
import { getAll, remove } from './db.js'


const generateTable = (tableData = []) => {
    const keys = Object.keys(tableData[0]);

    let thead = document.createElement('thead');
    table.appendChild(thead);
    let tr = document.createElement('tr');
    thead.appendChild(tr);

    keys.forEach(k => {
        const th = document.createElement('th');
        th.innerText = k;
        tr.appendChild(th);
    })
    const th = document.createElement('th');
    th.innerText = 'Actions';
    tr.appendChild(th);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody)
    for (let i = 0; i < tableData.length; i++) {
        let trow = document.createElement('tr');
        tbody.appendChild(trow);
        keys.forEach(k => {
            let td = document.createElement('td');
            td.innerText = tableData[i][k];
            trow.appendChild(td);
        });
        let td1 = document.createElement('td');
        trow.appendChild(td1);
        let btngroup = document.createElement('div');
        btngroup.classList = 'btn-group';
        btngroup.appendChild(td1);

        let editbtn = document.createElement('button');
        editbtn.classList = 'btn btn-info';
        editbtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editbtn.addEventListener('click', () => {
            alert(JSON.stringify(row));
        })
        btngroup.appendChild(editbtn);

        let trashbtn = document.createElement('button');
        trashbtn.classList = 'btn btn-danger';
        trashbtn.innerHTML = '<i class="fa fa-trash"></i>';
        trashbtn.addEventListener('click', async () => {
            if (confirm('biztos törölni akarja a sort?')) {
                await remove(row.id);
                alert(`a ${row.id} sor törölve`)

            }
        })
        btngroup.appendChild(trashbtn);
    };
};

getAll().then(data => generateTable(data))