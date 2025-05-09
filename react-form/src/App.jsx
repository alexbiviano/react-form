import { useState } from 'react'

function App() {  
  // Stato per gli articoli  
  const [articles, setArticles] = useState([  
    "Pasta cacio e pepe",  
    "Pasta alla carbonara",  
    "Pasta all'amatriciana",  
    "Pasta alla gricia",  
    "Pasta alla puttanesca"  
  ]);  
  
  // Stato per il nuovo titolo dell'articolo  
  const [newArticleTitle, setNewArticleTitle] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (newArticleTitle) {  
      // Aggiungi il nuovo articolo alla lista  
      setArticles([...articles, newArticleTitle]);  
      setNewArticleTitle(''); 
    }  
  };  

  return (  
    <div className="App">  
      <h1>Lista di Articoli</h1>  
      
      <form onSubmit={handleSubmit}>  
        <input  
          type="text"  
          value={newArticleTitle}  
          onChange={(e) => setNewArticleTitle(e.target.value)}  
          placeholder="Inserisci il titolo dell'articolo"  
        />  
        <button type="submit">Aggiungi Articolo</button>  
      </form>  
      
      <ul>  
        {articles.map((article, index) => (  
          <li key={index}>{article}</li>  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default App;  