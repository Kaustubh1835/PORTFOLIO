import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero'
import About from './Components/About'
import Service from './Components/Services.jsx';
import Contact from './Components/Contact.jsx'
import Form from './Components/Form.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <div className="flex flex-col md:flex-row w-full bg-black">
        <div className="w-full md:w-1/2 ">
          <Contact />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Form />
        </div>
      </div>
    </>
  )
}