import { AppProps } from 'next/app'
import { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
    const queryClient = useMemo(() => new QueryClient(), [])

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />{' '}
        </QueryClientProvider>
    )
}

export default App
