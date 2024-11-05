import './style.css'
import BuildTable from './utils/create-table'


const app = document.querySelector('#app')!;

const testTable = new BuildTable();


const a = testTable
.createHeaderRow(['Descripcion'])
.createDataRow(['uno','qwqqqw','asdsa'])
.createDataRow(['uno','qwqqqw','asdsa'])
.createDataRow(['uno','qwqqqw'])
.getTable()

app.appendChild(a)