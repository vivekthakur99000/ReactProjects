import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ReceipeContainer from './components/ReceipeContainer';

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipes, setReceipes] = useState([]);
  const [searchByIngredients, setSearchByIngredients] = useState(false); // New state for ingredient search

  const API_KEY = "cf9e2ce179484e05ad09e6550ba462a3";
  const SEARCH_API_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const RANDOM_API_URL = "https://api.spoonacular.com/recipes/random";
  const INGREDIENTS_API_URL = "https://api.spoonacular.com/recipes/findByIngredients";

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        let response;
        if (query) {
          if (searchByIngredients) {
            response = await fetch(`${INGREDIENTS_API_URL}?apiKey=${API_KEY}&ingredients=${query}`);
          } else {
            response = await fetch(`${SEARCH_API_URL}?apiKey=${API_KEY}&query=${query}`);
          }
        } else {
          response = await fetch(`${RANDOM_API_URL}?apiKey=${API_KEY}&number=10`);
        }
        const data = await response.json();
        setReceipes(data.results || data.recipes || []);
        setLoading(false);
        console.log(data.results || data.recipes);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();
  }, [query, searchByIngredients]); // Add searchByIngredients to dependency array

  return (
    <>
      <div className="main">
        <NavBar query={query} setQuery={setQuery} setSearchByIngredients={setSearchByIngredients} />

        <div className="max-w-fit max-h-full mx-auto flex items-center justify-center flex-wrap gap-8 mt-8">
          {loading ? <p>Loading...</p> : receipes.map((receipe, index) => (
            <ReceipeContainer key={index} title={receipe.title} imgSrc={receipe.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
