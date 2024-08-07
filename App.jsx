  import {useState} from 'react'
  import reactlogo from './assets/react.svg'
  import vitelogo from '/vite.svg'
 import './App.css'
 import Card  from './Components/Card'

 function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"marfowa",
    age:21
  }

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-t-xl '> Tailwind test</h1>
      <Card  username="chaiaurcode" someobj={myobj} btnText="click me" />
      <Card  username={"marfowa"} btnText="visit me" />
     </>
       
    
  )
}

 export default App
