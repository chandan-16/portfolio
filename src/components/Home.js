import { Link } from "react-router-dom";

const Home = () => {
    return(
    <div className="bg-[url('https://www.rammaheshwari.com/assets/svg/common-bg.svg')] bg-no-repeat bg-center bg-contain w-full py-50 px-4 mt-30">
        <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[900] tracking-wider leading-tight">HELLO, I'M CHANDAN GAUTAM</h1> 
            <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-700">A Frontend developer skilled in HTML, CSS, JavaScript, React.js, and Tailwind CSS. I build responsive, user-focused web interfaces with clean design and optimized performance.</p> 
            
            <Link to="/projects">
                <button className="mt-8 bg-[#7843E9] py-4 px-8 font-bold rounded text-white tracking-wider text-base sm:text-lg md:text-xl hover:bg-violet-700 transition-colors">PROJECTS</button>
            </Link>
        </div>
    </div>
)
}

export default Home;