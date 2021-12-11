import { useEffect } from 'react'
import { useQuery } from 'react-query'

const queryKey = '7f50365a-f904-470b-b22b-62b2fc59ec4a'

/**
 *  Latest username will be fetch on mount. Fetch errors will be silently ignored and pre-fetched data will be used.
 */
export const UpdatedUsername = ({
    fn,
    initialData,
    queryKey: key,
}: {
    fn: () => string | Promise<string>
    initialData: string
    queryKey: string
}) => {
    const { data, refetch } = useQuery([queryKey, key], fn, {
        enabled: false,
        initialData: initialData,
        keepPreviousData: true,
    })

    useEffect(() => {
        void refetch()
    }, [refetch])

    return (
        <>
            <span className="username">{data}</span>
        </>
    )
}
