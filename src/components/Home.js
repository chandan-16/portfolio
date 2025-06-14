const Home = ({ scrollToProjects }) => {
    return(
    <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-no-repeat bg-center bg-cover w-full h-screen flex items-center justify-center relative px-4">
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[900] tracking-wider leading-tight">HELLO, I'M CHANDAN GAUTAM</h1> 
            <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700">A Frontend developer skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. I build responsive, user-focused web interfaces with clean design and optimized performance.</p> 
            
            <button 
                onClick={scrollToProjects}
                className="mt-8 bg-[#7843E9] py-4 px-8 font-bold rounded text-white tracking-wider text-base sm:text-lg md:text-xl hover:bg-violet-700 transition-colors"
            >
                PROJECTS
            </button>
            
            {/* Scroll Animation Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce flex flex-col items-center">
                    <p className="text-gray-600 mb-2 text-sm font-bold text-xl">Scroll Down</p>
                    <svg 
                        className="w-6 h-6 text-violet-600 font-bold text-bolder" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;