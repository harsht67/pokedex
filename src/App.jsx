import './App.scss'
import { SearchBar, Filter, Button, Card } from './components'

import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

    const [data, setData] = useState([])

    const [page, setPage] = useState(20)

    // search bar 
    const [search, setSearch] = useState({
        val: '',
        go: false,
        data: {},
    })

    // fetches 20 pokemon's data 
    useEffect(() => {

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page}`)
            .then(res => setData(res.data.results))

    }, [page])

    // to go to next page
    const nextPage = () => {
        setPage(prev => prev+20)
    }

    // to go to previous page
    const prevPage = () => {
        page>20 && setPage(prev => prev-20)
    }

    // updates search field
    const changeHandler = (val) => {
        setSearch({
            ...search,
            val,
        })
    }

    const searchFunc = () => {
        // to avoid searching for empty values 
        search.val &&
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${search.val}`)
                .then(res => (
                    setData({
                        ...search,
                        go:true,
                        data: res.data,
                    })
                ))
    }

    return (
    <div className="app">

        <header>

            <SearchBar
                data={search.val}
                changeHandler={changeHandler}
                searchFunc={searchFunc}
            />

            <Filter/>

        </header>

        <main>

            {search.go 
                
                ? <Card data={search.data} search={true} />
                
                : data?.map(data => (
                    <Card 
                        key={data.name}
                        data={data} 
                    />
                ))
                
            }   

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