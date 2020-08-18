import { useState, useEffect } from 'react';

export default function useFetch(url) {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=> {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => setError(err))
    .finally( _ => setLoading(false))
  }, [url])

  function post(newInput) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newInput)
    }
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(_ => setLoading(false))
  }

  return {
    data, loading, error, post
  }
} 