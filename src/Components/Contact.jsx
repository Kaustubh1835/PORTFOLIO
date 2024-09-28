import { useState } from 'react';
import emailjs from '@emailjs/browser'

    

    function Contact() {


        let [name , setname] = useState("");
       let [email , setemail] = useState("");




       let handle = (e) =>{
        e.preventDefault();
    
        let serviceId = 'service_n5ljq9c';
        let templateId = 'template_difx26v';
        let publicKey = 'WDS10LfRELKL4Ovqp';


        let params ={
            from_name :name,
            from_email : email ,
            
    
    
        }

            emailjs.send(serviceId , templateId , params , publicKey)
            .then((response)=>{
              console.log("email send successfully ",response)
              setname("");
              setemail("");
            }).catch((error)=>{
              console.log(error);
            })
    };

      

    return (
      <>
          <div className="min-h-screen flex" id='Contact'>

<div className="w-3/4 flex flex-row justify-center bg-black">
<div className='text-4xl flex flex-row  text-gray-50 font-bold '>Connect with me</div>
{/* form element */}
<div className="w-1/2 flex items-center justify-center bg-black">
<div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
<h2 className="text-2xl text-gray-300 font-bold mb-6 text-center">INFO </h2>
<p className="text-gray-300 mb-4">
  <div className='mb-4 '>

      <a href="https://mail.google.com/mail" className='hover:underline'>
          <li>kaustubhbodakhe1835@gmail.com</li>
      </a>
  </div>
  <div className='mb-4 '>
      <li>+919561201835</li>
  </div>

</p>

</div>

</div>




              </div>
              {/* form element ends */}
              {/* text area  start*/}
              <div className="flex items-center  min-h-screen bg-black">
                
<div className="bg-black p-8 rounded-lg shadow-lg text-white ">
<div className='text-3xl flex flex-row  text-gray-50 font-bold mb-8'>Details</div>
<div id='hover form' className=' h-80 w-80 transform  bg-black  hover:bg-gray-900 transition duration-500 hover:scale-110 flex justify-center '>
                      


  <form id="fancyForm" onSubmit={handle}>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-2">Name:</label>
      <input 
      value={name}
      onChange={(e) =>setname(e.target.value)}
        type="text" 
        id="name" 
        name="name" 
        required 
        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-50"
      />
    </div>
    
    <div className="mb-4">
      <label htmlFor="email" className="block mb-2">Email:</label>
      <input 
       value={email}
       onChange={(e) =>setemail(e.target.value)}

        type="email" 
        id="email" 
        name="email" 
        required 
        className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-50"
      />
    </div>
    
    <button  type="submit" 
      className="w-full p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-50"
    >
      Submit
    </button>
  </form>
                      </div>

</div>
</div>


            

      </div>
      </>
  )
 
       
    };

   


      
 

        
    

export default Contact

{/*  */}