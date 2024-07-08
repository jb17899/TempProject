import React,{ useState } from 'react'
import Body from './Body'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='app'>
<React.StrictMode>
<Nav/>
<div className='Body'>
<Body/>
</div>
</React.StrictMode>
</div>
  )
}

export default App
