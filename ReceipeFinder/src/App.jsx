import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Receipe from './components/Receipe'

function App() {

  const[query, setQuery] = useState("")
  const[receipe, setReceipe] = useState([])
  const[loading, setLoading] = useState(false)

  const API_KEY = "cf9e2ce179484e05ad09e6550ba462a3"
  const API_URL = `https://api.spoonacular.com/recipes/complexSearch`;

  useEffect(() => {
    if (query) {
      setLoading(true)
      fetch(`${API_URL}?apiKey=${API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(data => {
        setReceipe(data.results)
        setLoading(false)
        console.log(data);
      }).catch(error => {
        setLoading(false)
        console.log(error);
      })
    }
  }, [query])
  

  return (
    <>

    <div className="main">
      <NavBar query={query} setQuery={setQuery} />
    </div>

    <div className="receipes flex flex-wrap justify-center mx-auto ">
      {
        loading ? <p>Loading...</p> :
        receipe.filter(rece => rece.image)
        .map((rece, index) => {
          return (
            <Receipe key={index} imgSrc={rece.image} title = {rece.title} />
          )
        })
      }
    </div>

    </>
  )
}

export default App
