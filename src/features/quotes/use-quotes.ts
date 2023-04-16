import {useEffect, useState} from 'react'
import axios from 'axios'
import IQuote from './quote-interface'

const API = 'https://quote-app-server-production.up.railway.app/api/quotes'

interface IUseQuotesProps {
    category: string,
    limit: number
}

export type TUseQuotesResponse = {
    quotes: IQuote[],
    isLoading: boolean,
    error: boolean,
    status: string,
    loadMore: () => void
}

export const useQuotes = ({category, limit}: IUseQuotesProps): TUseQuotesResponse => {
    const [quotes, setQuotes] = useState<IQuote[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('')

    const controller = new AbortController()

    useEffect(() => {
        setQuotes([])
        setError(false)
        setStatus('')

        if (isLoading) {
            controller.abort()
        }

        setIsLoading(true)

        fetchQuotes()
            .then(response => {
                setQuotes(response.data)
            })
            .catch(error => {
                setError(true)
                setStatus(error.response?.data.error || 'Something went wrong...')
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [category, limit])

    const fetchQuotes = () => {
        return axios.get<IQuote[]>(API, {
            signal: controller.signal,
            params: {
                category,
                limit,
            }
        })
    }

    const loadMore = () => {
        setIsLoading(true)

        fetchQuotes()
            .then(response => {
                setQuotes(quotes.concat(response.data))
            })
            .catch(error => {
                setError(true)
                setStatus(error.response?.data.error || 'Something went wrong...')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {quotes, isLoading, error, status, loadMore}
}