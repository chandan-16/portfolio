import purple from "../assets/images/purple-me.jpeg";

const Footer = () => {
    return(
    <footer className="bg-black text-white py-10 px-4 sm:px-6 md:px-12 lg:px-24  bottom-0 left-0 w-full mt-20">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 mb-8">
                
                <div className="sm:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">CHANDAN GAUTAM</h2>
                    <p className="text-sm leading-relaxed">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
                    </p>

                <div className="sm:w-1/2 pt-5">
                    <h2 className="text-2xl font-bold mb-2">SOCIAL</h2>
                    <ul className="flex gap-4 text-xl">
                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="#"><i className="bi bi-github"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    </ul>
                </div>                    

                </div>

                <div className="sm:w-1/2">
                    <img src={purple} alt="Self" className="rounded-full h-50 w-50" />
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