import { useEffect, useState } from "react"

export type Token = {
  symbol: string
  name: string
  address: string
  logoURI: string
}

export function useTokens() {
  const [tokens, setTokens] = useState<Token[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTokens([

      {
        symbol: "AO",
        name: "AO Token",
        address: "arweave:ao",
        logoURI: "/logos/ao.svg",
      },
    ])
    setLoading(false)
  }, [])

  return { tokens, loading }
}
