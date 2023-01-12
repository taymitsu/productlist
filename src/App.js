import './App.css';
import data, {reduceCategories} from './data'; //imports data.js file, no extension 
// NON DEFAULT EXPORTS { } //
import ProductList from './ProductList';
import CategoryButtons from './CategoryButtons';

//console.log(data)
//console.log(allCategories)
//console.log(reduceCategories)
//console.log(categoryWithCount) //EX: {Movies: 6}
//console.log(nameAndCount) //EX: {Name: Movie, count: 6}

function App() {
  return (
    <div className="App">
      <h1>Product Shop</h1>
      <p>Product Count: { data.length }</p>
      <p>Category Count: { reduceCategories.length }</p>

        <CategoryButtons />
        <ProductList />
  
    </div>
  );
}

export default App;
