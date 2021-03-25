import { Api } from "../api/Api";

export default function Home({ data }) {
  console.log(data);

  return <div> allo </div>;
}

export async function getStaticProps() {
  const test = new Api("/users");
  //const res = await test.create({text : "ça marche !"});
  //const datas = await test.find();
  const auth = await test.auth({ email: "test@gmail.com", password: "secret" });

  //const datas =  await test();
  return {
    props: {
      data: auth,
    },
  };
}

/*Home.getInitialProps  = async () =>{
    const datas = await fetchText();
    const res = await fetch(`http://localhost:3030/test`);
    const test =  await res.json()
    return {data : datas};
}*/
