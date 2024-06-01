import { useState } from 'react';



function useFetch<TypeFromFetch>() {

    const [fetchValue, setFetchValue] = useState<TypeFromFetch | null>(null)


    async function fetchEndpoint(URLToFetch: string | null) {

        if (URLToFetch) {

            const response = await fetch(URLToFetch)

            const data: TypeFromFetch = await response.json()

            setFetchValue(data)

        }

    }

    return [fetchValue, fetchEndpoint] as [TypeFromFetch | null, (URLToFetch: string) => Promise<void>]

}


export default useFetch