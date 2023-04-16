import React, {useEffect, useState} from 'react'
import {CustomButton} from 'ui'
import {LikeUtility} from 'pages/liked-quotes';
import s from './quote-card.module.css'

interface IQuoteCardProps {
    quote: string,
    author: string,
    category: string,
    showCategory: boolean,
}

const QuoteCard = ({quote, author, category, showCategory}: IQuoteCardProps) => {
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        const isLiked = LikeUtility.isLiked({quote, author, category})
        if (isLiked) setIsLiked(true)
    }, [])

    const like = () => {
        LikeUtility.like({
            quote,
            author,
            category
        })

        setIsLiked(true)
    }

    const dislike = () => {
        LikeUtility.dislike({
            quote,
            author,
            category
        })

        setIsLiked(false)
    }

    return (
        <div className={s.wrapper}>
            <h1>{author}</h1>
            {showCategory && <p className={s.category}>{category}</p>}
            <p>
                {quote}
            </p>
            <div className={s.like_button}>
                <CustomButton onClick={isLiked ? dislike : like}>
                    {isLiked ? 'Dislike' : 'Like'}
                </CustomButton>
            </div>
        </div>
    )
}

export default QuoteCard