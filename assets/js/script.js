(() => {
    const container = document.createElement('div');
    container.classList.add("container", 
    "mb-5","rounded-3");
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
    col.classList.add("d-flex","flex-column","align-items-center","vh-100","justify-content-around");

    const aClass = ["expense","investiments","add","withdraw"];
    const aTexts = ["Expense", "Investments", "Add", "Withdraw"];
    const colors = ["bg-success", "bg-warning", "bg-primary", "bg-danger"];
    const divs = [document.createElement('div'),document.createElement('div')];

    for (let i = 0; i < 4; i++) {
        const a = document.createElement('a');
        a.classList.add(aClass[i],colors[i],"btn","text-white");
        a.innerText = aTexts[i];
        if(a.classList.contains("expense") || a.classList.contains("investiments")) {
            divs[0].appendChild(a);
        } else {
            divs[1].appendChild(a);
        }
    }
    col.appendChild(divs[0]);
    col.appendChild(divs[1]);
}

const column3 = () => {
    const col3 = document.querySelector('.column-3');
    col3.classList.add("text-center");
    const label = document.createElement('label');
    label.classList.add("savings","disabled","btn","btn-warning","text-white");
    label.innerText = 'Savings';

    col3.appendChild(label);
}   

column1();
column2();
column3();
