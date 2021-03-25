import { Api } from "../api/Api";
import LoginExample from "../components/LoginExample";

export default function Home({ data }) {
  console.log(data);

  return (
    <div>
      <LoginExample></LoginExample>)<p> {data.text}</p>
    </div>
  );
}

export async function getStaticProps() {
  const datas = new Api();

  const texts = await datas.get("test", 1);

  return {
    props: {
      data: texts,
    },
  };
}

/*Home.getInitialProps  = async () =>{
    const datas = await fetchText();
    const res = await fetch(`http://localhost:3030/test`);
    const test =  await res.json()
    return {data : datas};
}*/
