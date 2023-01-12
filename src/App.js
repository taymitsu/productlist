import './App.css';
import data, { allCategories, reduceCategories, categoryWithCount, nameAndCount } from './data' //imports data.js file, no extension 
// NON DEFAULT EXPORTS { } //

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
      
      <div>
        {nameAndCount.map(obj => {
          return (
            <button>
              {obj.name}
              <span> {obj.count} </span>
            </button>
          )
        })}
      </div>

      <div>
        {data.map(obj => {
          return (
            <div>
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <p>{obj.price}</p>
              <small>Category: {obj.category} Rating: {obj.rating}</small>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
