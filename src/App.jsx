import './App.scss'
import { SearchBar, Filter, Button, Card } from './components'

import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

    const [data, setData] = useState([])

    const [page, setPage] = useState(20)

    useEffect(() => {
        // alert(page)

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
            .then(res => setData(res.data.results))

    }, [page])

    const nextPage = () => {
        setPage(prev => prev+20)
    }

    const prevPage = () => {
        page>20 && setPage(prev => prev-20)
    }

    return (
    <div className="app">

        <header>

            <SearchBar/>

            <Filter/>

        </header>

        <main>

            {data?.map(data => (
                <Card 
                    key={data.name}
                    data={data} 
                />
            ))}

        </main>

        <footer>

            <Button onClick={prevPage}>
                previous
            </Button>

            <Button onClick={nextPage} >
                next
            </Button>

        </footer>

    </div>
    )
}

export default App