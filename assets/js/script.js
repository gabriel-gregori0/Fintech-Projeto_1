(() => {
    const container = document.createElement('div');
    container.className = "container";
    const row = document.createElement('div');
    row.className = "row";

    for (let i = 0; i < 3; i++) {
        const col = document.createElement('div');
        col.className = "col-4";
        const p = document.createElement('p');
        col.classList.add(`column-${i + 1}`);

        row.appendChild(col);
    }
    container.appendChild(row);
    document.body.appendChild(container);
})();
