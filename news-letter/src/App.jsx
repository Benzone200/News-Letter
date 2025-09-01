import './App.css'
import Navbar from "./components/Navbar.jsx"
import News from "./components/News.jsx"

function App() {
  
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-blue-600 sm: h-[900px] ">
      <div className="bg-black w-[90%] h-[600px]  sm: h-[800px]  max-w-5xl rounded-md shadow-xl p-6">
      <Navbar/>
      <News/>
     </div>
     </div>
    </>
  )
}

export default App
