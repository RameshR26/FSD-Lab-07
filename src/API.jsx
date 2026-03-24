import { useEffect, useState } from "react"

export default function API() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then(res => res.json())
      .then(res => setData(res.data.slice(0,5)))
  }, [])

  return (
    <div>
      <h3>Crypto Market</h3>
      {data.map(item => (
        <p key={item.id}>
          {item.name} - ${Number(item.priceUsd).toFixed(2)}
        </p>
      ))}
    </div>
  )
}