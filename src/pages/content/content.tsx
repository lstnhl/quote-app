import React from 'react'
import {QuoteList} from 'features/quotes'
import {Route, Routes} from 'react-router-dom'
import {LikedQuotes} from 'pages/liked-quotes';
import categories from 'misc/categories'
import s from './content.module.css'

const Content = () => {
    return (
        <div className={s.wrapper}>
            <Routes>
                <Route path='/' element={<QuoteList category='' limit={10}/>}/>
                {categories.map(cat =>
                    <Route key={cat} path={cat} element={<QuoteList category={cat} limit={10}/>}/>
                )}
                <Route path='/liked' element={<LikedQuotes/>}/>
                <Route path='*' element={<h1 style={{marginTop: '50px'}}>OOPS! PAGE NOT FOUND!</h1>}/>
            </Routes>
        </div>
    )
}

export default Content