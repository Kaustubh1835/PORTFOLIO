

export default function Navbar() {
    
    
    return(
        <div className='bg-black'>  
            <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline">KAUSTUBH BODAKHE</div>
                <div className="space-x-6">
                    <a href="#Home" className="hover:text-gray-400">Home</a>
                    <a href="#About" className="hover:text-gray-400">About Me</a>
                    <a href="#Service" className="hover:text-gray-400">Services</a>
                    <a href="#Project" className="hover:text-gray-400">Projects</a>
                    <a href="#Contact" className="hover:text-gray-400">Contact</a>
                    
                </div>
                <button className="bg-blue-900 text-white rounded-full hover:scale-110 hover:border hover:border-white transition-transform duration-300 ease-in-out px-4 py-2" >Connect With Me</button>
            </div>
        </nav>
        </div>
    )
}