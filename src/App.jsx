import { useEffect, useState  } from 'react'
import CountryApi from './Components/Country';
import {Selectedcountry} from './Components/Selectcountry';

function App() {
  const [select, setSelect] = useState(0);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("/data.json")
    .then((res) => {
      if(!res){
        throw new Error("Network Connection was not OK!")
      }
      return (res.json());
    })

    .then((data) => {
      console.log(data);
      setCountry(data);
    })

    .catch((err) => {
      console.log(err);
      setError(err)
    })

  }, [])


  const homePage = () => setSelect(0);  
  const selectedCountry = () => setSelect(1);  
 
  
  if (error){
    return (
      <p>Error Message: {error.message}</p>
    )
    
  }

  return (
    <>
      {select === 0 && (
        <CountryApi
        country={country}
        onClickCountry={selectedCountry}
        />
      )}

      {select === 1 && (
        <Selectedcountry
        country={country}
        onClickBack={homePage}
        />
      )}
    </>
  )
}

export default App
