import './Modal.scss'

import { MdClose } from 'react-icons/md'

function Modal({data, ...props}) {

    const closeModal = () => {
        props.toggleModal()
    }

    const { name, id, stats } = data

    return (
        <article className="modal">

            <div className="modal__container">

                <header>

                    <h1 className="modal__title" >
                        stats
                    </h1>

                    <MdClose 
                        className="icon" 
                        onClick={closeModal}
                    />
                
                </header>

                <section className="modal__content">

                    <img
                        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt="pokemon image"
                    />

                    <section className="modal__stats">

                        {stats.map(stat => (
                            <div key={stat.stat.name} >
                                <b>{stat.stat.name}:</b>
                                <span>{stat.base_stat}</span>
                            </div>
                        ))

                        }
                        
                    </section>

                </section>
            

            </div>

        </article>
    )
}

export default Modal