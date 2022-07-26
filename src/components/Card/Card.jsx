import './Card.scss'
import Modal from '../Modal/Modal'

import { useEffect, useState } from 'react'
import axios from 'axios'

function Card(props) {

    const [data, setData] = useState({})

    const [modal, setModal] = useState(false)

    useEffect(() => {
        
        axios   
            .get(props.data.url)
            .then(res => setData(res.data))
    
    }, [])

    const toggleModal = () => {
        setModal(prev => !prev)
    }

    return (
        <article className="card">

            <p className="id">
                #{data.id}
            </p>

            <img
                src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt="pokemon img"
            />

            <section className="desc">

                <p className="name">
                    {data.name}
                </p>

                <div className="types">
                
                    {data.types?.map(type => (
                        <span key={type.slot}>
                    
                            {type.type.name}
                    
                        </span>
                    ))}
                
                </div>

            </section>

            <div
                className="statBtn" 
                onClick={toggleModal}
            >
                
                click to open stats

            </div>

            {modal && 
                <Modal
                    data={data}
                    toggleModal={toggleModal}
                />
            }

        </article>
    )
}

export default Card