import { useState } from 'react'

function App() {  
  // Array di articoli (titoli)  
  const articles = [  
    "Pasta cacio e pepe",  
    "Pasta alla carbonara",  
    "Pasta all'amatriciana",  
    "Pasta alla gricia",  
    "Pasta alla puttanesca"  
  ];   

  return (  
    <div className="App">  
      <h1>Lista di Articoli</h1>  
      <ul>  
        {articles.map((article, index) => (  
          <li key={index}>{article}</li>  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default App;  