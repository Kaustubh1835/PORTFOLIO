
const About = () => {
    return (
        <div className='bg-black text-white py-20' id='About'>
            <div className='container mx-auto px-8 md:-16 lg:px-24'>
                <div className='text-4xl font-bold text-center mb-12'>About Me</div>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>

                    <img src="./sqr.png" alt=""
                        className='w-70 h-80 rounded object-cover mb-8 md:mb-0' />

                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            Im a passionate front-end developer with a keen eye for design and a love for crafting intuitive,
                            responsive web experiences. With expertise in modern web technologies like React, HTML, CSS, and JavaScript,
                            I create clean, efficient code to bring dynamic, user-friendly interfaces to life.
                            Whether its collaborating with designers, optimizing performance, or ensuring pixel-perfect details,
                            I thrive on transforming ideas into engaging digital products. When Im not coding,
                            you can find me exploring the latest web trends and continuously improving my skills to stay ahead in this fast-evolving field.
                        </p>
                        <div className='mx-4'> <div className='space-y-4'>
                            <div className='flex items-center'>

                                <label htmlFor="HTMLandCSS" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-10/12'>

                                    </div>
                                </div>



                            </div>
                        </div>

                            <div className='space-y-4'>
                                <div className='flex items-center'>

                                    <label htmlFor="js" className='w-2/12'>Javascript</label>
                                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-8/12'>

                                        </div>
                                    </div>



                                </div>

                            </div>
                            <div className='space-y-4'>
                                <div className='flex items-center'>

                                    <label htmlFor="HTMLandCSS" className='w-2/12'>React</label>
                                    <div className='grow bg-gray-800 rounded-full h-2.5'>
                                        <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform
                             transition-transform duration-300 hover:scale-105 w-5/12'>

                                        </div>
                                    </div>



                                </div>

                            </div></div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default About