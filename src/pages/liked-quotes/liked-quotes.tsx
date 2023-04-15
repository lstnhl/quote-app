import React, {useEffect, useState} from 'react'
import {QuoteCard} from 'features/quotes'
import {IQuote} from 'features/quotes';
import {CustomButton} from 'ui'
import LikeUtility from './like-utility'
import s from './liked-quotes.module.css'


const LikedQuotes = () => {
    const [likedQuotes, setLikedQuotes] = useState<IQuote[]>([])

    useEffect(() => {
        setLikedQuotes(LikeUtility.getLikedQuotes())
        document.title = 'Q: LIKED QUOTES'
    }, [])

    const dislikeAll = () => {
        LikeUtility.dislikeAll()
        setLikedQuotes([])
    }

    return (
        <div className={s.wrapper}>
            <h1>LIKED QUOTES</h1>
            {likedQuotes.length === 0
                ?
                <p>No liked quotes yet!</p>
                :
                <CustomButton onClick={dislikeAll}>
                    Dislike all
                </CustomButton>
            }
            <div className={s.liked_quotes}>
                {likedQuotes.map((quote: IQuote) =>
                    <QuoteCard {...quote} showCategory/>
                )}
            </div>
        </div>
    )
}

export default LikedQuotes