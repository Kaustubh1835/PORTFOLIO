
export const Hero = () => {
  return ( <div className='bg-black text-white text-center py-16 ' id='Home'>

        <img src="./round.png" alt="kasustubh's img" className='mx-auto mb-8w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105' />
        <h1 className='text-4xl font-bold' >
        Im {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>KAUSTUBH BODAKHE</span>
        ,Front-End Developer
    </h1 >
       <p className='mt-4 text-lg text-300 px-4 md:px-32'>
       I Learn to  crafting the seamless user interfaces and responsive web applications.
    </p>

    <div className='mt-8 space-x-4'>
       < button className='bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-6 py-3 transform transition-transform duration-300 ease-in-out hover:scale-110'>Contact Me</button>
       <button className='bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full px-6 py-3 transform transition-transform duration-300 ease-in-out hover:scale-110'>Resume</button>
      </div> 
        </div> )
   
  
}
