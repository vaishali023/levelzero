import { useEffect, useState } from "react";

export type Token = {
    symbol:string
    name: string
    address: string
    logoURI: string
}

export function useTokens(chainId: number = 1) {
   const [tokens, setTokens] = useState<Token[]>([]);
   const[loading, setLoading] = useState(true);

   useEffect(() => {
    setLoading(true)
    fetch(`https://tokens.1inch.io/v1.1/${chainId}`)
    .then((res) => res.json())
    .then((data) => {
        setTokens(Object.values(data))
    })
    .catch((err) => {
        console.error("Error fetching tokens: ", err)
        setTokens([])
    })
    .finally(() => setLoading(false))
   },[chainId])

    return {tokens, loading};
}