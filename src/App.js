import React from 'react';
import './App.css';

import data, {reduceCategories} from './data'; //imports data.js file, no extension 
// NON DEFAULT EXPORTS { } //
import ProductList from './ProductList';
import CategoryButtons from './CategoryButtons';
import Header from './Header';

//console.log(data)
//console.log(allCategories)
//console.log(reduceCategories)
//console.log(categoryWithCount) //EX: {Movies: 6}
//console.log(nameAndCount) //EX: {Name: Movie, count: 6}

function App() {
  return (
    <div className="App">
        <Header 
        title="Product Shop"
        productCount={data.length} 
        categoryCount={reduceCategories.length}
        />

        <CategoryButtons />
        <ProductList />
  
    </div>
  );
}

export default App;
