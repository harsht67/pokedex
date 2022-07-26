import './Filter.scss'

import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

function Filter() {
    return (
        <article className="filter">

            <section className='filter__btn'>

                <span>
                    Filter
                </span>

                <MdOutlineKeyboardArrowDown className='icon' />

            </section>

        </article>
    )
}

export default Filter