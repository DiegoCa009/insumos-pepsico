class BuildTable {
    private table: HTMLTableElement;
    private tbody: HTMLTableSectionElement;
    private thead: HTMLTableSectionElement;
    private tfoot: HTMLTableSectionElement;
    constructor(){
        this.table = document.createElement('table');
        this.tbody = document.createElement('tbody');
        this.thead = document.createElement('thead');
        this.tfoot = document.createElement('tfoot');
    }

    public createHeaderRow(titles:string[]): BuildTable{
        const tr = document.createElement('tr');
        titles.forEach((title)=>{
            const th = document.createElement('th');
            th.textContent = title;
            tr.appendChild(th);
            this.thead.appendChild(tr);
        });
        return this

    }
    
    public createDataRow(data: string[]): BuildTable{
        const tr = document.createElement('tr');
        data.forEach((d)=>{
            const td = document.createElement('td');
            td.textContent = d;
            tr.appendChild(td);
            this.tbody.appendChild(tr);
        });
        return this
    }

    public getTable(): HTMLTableElement{
        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);
        this.table.appendChild(this.tfoot);
        
        return this.table
    }
}

export default BuildTable;