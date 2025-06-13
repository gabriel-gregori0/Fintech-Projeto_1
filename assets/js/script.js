(() => {
    const container = document.createElement('div');
    container.classList.add("container","mt-5", 
    "mb-5", "p-3","bg-dark-subtle","align-items-center", 
    "justify-content-center","d-flex","flex-column");
    const row = document.createElement('div');
    row.className = "row";

    for (let i = 0; i < 3; i++) {
        const col = document.createElement('div');
        col.classList.add(`column-${i + 1}`,"col-4");

        row.appendChild(col);
    }
    container.appendChild(row);
    document.body.appendChild(container);
})();

const column1 = () => {
    const col1 = document.querySelector('.column-1');
    col1.classList.add("text-center");
    const label = document.createElement('label');
    label.classList.add('balance',"disabled","btn","btn-success");
    label.innerText = 'Balance';

    col1.appendChild(label);
}

const column2 = () => {
    const col = document.querySelector('.column-2');
    const row2 = document.createElement('div');
    col.classList.add("row", "align-items-center");
    col.appendChild(row2);
    const col2 = document.createElement('div');
    col2.classList.add("col-12", "d-flex", "flex-column", "align-items-center");
    row2.appendChild(col2);
    
    const aClass = ["expense","investiments","add","withdraw"];
    const aTexts = ["Expense", "Investments", "Add", "Withdraw"];

    for (let i = 0; i < 4; i++) {
        const a = document.createElement('a');
        a.classList.add(aClass[i], "text-center", "justify-content-center", "d-flex");
        a.innerText = aTexts[i];

        col2.appendChild(a);
    }
}

const column3 = () => {
    const col3 = document.querySelector('.column-3');
    col3.classList.add("text-center");
    const label = document.createElement('label');
    label.classList.add("savings","btn","btn-warning","disabled");
    label.innerText = 'Savings';

    col3.appendChild(label);
    
}   

column1();
column2();
column3();
