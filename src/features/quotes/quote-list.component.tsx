import React, {useEffect} from 'react'
import QuoteCard from './quote-card.component'
import {TUseQuotesResponse, useQuotes} from './use-quotes'
import {Loader} from 'ui';
import {CustomButton} from 'ui'

import s from './quote-list.module.css'

interface IQuoteListProps {
    category: string,
    limit: number
}

const QuoteList = ({category, limit}: IQuoteListProps) => {
    const {quotes, isLoading, error, status, loadMore}: TUseQuotesResponse = useQuotes({
        category,
        limit
    })

    useEffect(() => {
        document.title = category ? `Q: ${category.toUpperCase()}` : 'QUOTES APP'
    }, [isLoading])

    return (
        <div className={s.wrapper}>
            <div className={s.category}>
                <h1>{category ? `QUOTES ABOUT ${category.toUpperCase()}` : 'RANDOM QUOTES FROM OVER THE WORLD'}</h1>
            </div>
            {quotes.map(q => <QuoteCard key={q.quote} {...q} showCategory={!category}/>)}
            <div className={s.bottom_section}>
                {!isLoading &&
                    <CustomButton onClick={loadMore}>
                        Load more
                    </CustomButton>}
                {isLoading && <Loader/>}
                {error && status}
            </div>
        </div>
    )
}

export default QuoteList