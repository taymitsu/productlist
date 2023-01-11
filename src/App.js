import './App.css';
import data, { allCategories, reduceCategories, categoryWithCount, nameAndCount } from './data' //imports data.js file, no extension 
// NON DEFAULT EXPORTS { } //

console.log(data)
console.log(allCategories)
console.log(reduceCategories)
console.log(categoryWithCount) //EX: {Movies: 6}
console.log(nameAndCount) //EX: {Name: Movie, count: 6}

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
