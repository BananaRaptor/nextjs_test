import useSWR from 'swr'
import Quote from './quote'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default ({ children }) => {
  const { data, error } = useSWR('http://ron-swanson-quotes.herokuapp.com/v2/quotes/12', fetcher)


  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data);
  return <table className="table is-fullwidth is-striped">
            <tbody>
                {data.map((quote) => (
                    <Quote text={quote} />
                ))}
            </tbody>
        </table>             
}