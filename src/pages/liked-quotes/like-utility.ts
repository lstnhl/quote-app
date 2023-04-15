import {IQuote} from 'features/quotes'

class LikeUtility {
    getLikedQuotes = (): IQuote[] => {
        return JSON.parse(localStorage.getItem('likedQuotes')!) || []
    }

    isLiked = (quote: IQuote) => {
        const existingLikes = this.getLikedQuotes()

        return existingLikes.find((item) => {
            return item.quote === quote.quote
        })
    }

    like = (quote: IQuote) => {
        let existingLikes = this.getLikedQuotes()

        const index = existingLikes.findIndex((item) => {
            return item.quote === quote.quote
        })

        if (index === -1) {
            existingLikes.push(quote)
            localStorage.setItem('likedQuotes', JSON.stringify(existingLikes))
        }
    }

    dislike = (quote: IQuote) => {
        const existingLikes = this.getLikedQuotes()

        const index = existingLikes.findIndex((item) => {
            return item.quote === quote.quote
        })

        existingLikes.splice(index, 1)

        localStorage.setItem('likedQuotes', JSON.stringify(existingLikes))
    }

    dislikeAll = () => {
        localStorage.removeItem('likedQuotes')
    }
}

export default new LikeUtility()