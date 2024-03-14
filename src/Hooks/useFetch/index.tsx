import { useState, useEffect } from 'react';


let URL: string | null = null

function setUrl(newUrl: string): void {

    URL = newUrl

}

function useFetch<ObjectFromFetch>() {

    const [fetchValue, setFetchValue] = useState<ObjectFromFetch | null>(null)


    useEffect(() => {

        fetchEndpoint(URL)

    }, [URL])


    async function fetchEndpoint(URLToFetch: string | null) {

        if (URLToFetch) {

            const response = await fetch(URLToFetch)

            const data: ObjectFromFetch = await response.json()

            setFetchValue(data)

        }

    }

    return [fetchValue, setUrl] as [ObjectFromFetch | null, (newUrl: string) => void]

}


export default useFetch