import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getApi();
  })

  const getApi = async () => {
    const res = await axios.get('https://api.resumatorapi.com/v1/applicants?apikey=2IacfqOTZVmQyjmhKmIypBvuwhfzSjFE')
    const data = await res.data
    console.log(data);
    setData(data)
  }

  return (
    <div className="App">
      {data.map((item)=>{
        return (
          <div>
            <p>NOME : {item.first_name}</p>
            <p>SOBRENOME : {item.last_name}</p>
            <p>TELEFONE : {item.prospect_phone}</p>
            <p>DATA : {item.apply_date}</p>
            <p>PROFISÂO : {item.job_title}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
