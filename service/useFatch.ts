import { useState } from 'react';

export const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = () => {
        try {

        }
        catch (err) {
            //@ts-ignore
            setError(err instanceof Error ? err : new Error('An unexpected error occurred'));
        } finally {
            setLoading(false);
        }
    }

}




