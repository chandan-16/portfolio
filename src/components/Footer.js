import purple from "../assets/images/purple-me.jpeg";

const Footer = () => {
    return(
    <footer className="bg-black text-white py-10 px-4 sm:px-6 md:px-12 lg:px-24 w-full mt-20">
        <div className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
                
                <div className="flex flex-col gap-6 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">CHANDAN GAUTAM</h2>
                    <p className="text-md leading-relaxed text-gray-300">
                        "Start where you are. Use what you have. Do what you can." — Arthur Ashe
                    </p>

                <div className="sm:w-1/2 pt-5">
                    <h2 className="text-2xl font-bold mb-2">SOCIAL</h2>
                    <ul className="flex gap-4 text-xl">
                        <li><a href="https://www.linkedin.com/feed/"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/"><i className="bi bi-github"></i></a></li>
                        <li><a href="https://www.youtube.com/@chandangautam5763"><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div>                    

                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img src={purple} alt="Self" className="rounded-full w-50 h-50 object-cover" />
                </div>
            </div>

            <hr className="border-gray-700 mb-4" />
            <p className="text-center text-sm text-gray-400">
                © Copyright 2025 . Made by <span className="font-bold">CHANDAN GAUTAM with ❤️</span>
            </p>
        </div>
    </footer>        
    )
};

export default Footer;