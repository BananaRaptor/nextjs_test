import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default ({ children }) => {
  const { data, error } = useSWR('http://ron-swanson-quotes.herokuapp.com/v2/quotes', fetcher, { refreshInterval: 10 })


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);
  return <div>
       {data[0]}
      </div>
}