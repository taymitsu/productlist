import './App.css';
import data, { allCategories, reduceCategories, categoryWithCount } from './data' //imports data.js file, no extension 
// NON DEFAULT EXPORTS { } //

console.log(data)
console.log(allCategories)
console.log(reduceCategories)
console.log(categoryWithCount)

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
