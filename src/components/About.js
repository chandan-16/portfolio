import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
    <div className="text-center pb-10 z-20 mb-10 px-4 mt-20 pt-10">
      <h2 className="text-4xl sm:text-5xl font-[900] tracking-widest pt-10 pb-5">About Me</h2>
      <hr className="h-2 w-7 rounded bg-violet-600 border-none mb-5 mx-auto" />
      <p className="text-[#555555] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
    </div>

    <div className="flex flex-col md:flex-row justify-between gap-10 px-4 max-w-7xl mx-auto">
      <div className="text-left md:w-2/4">
        <h3 className="tracking-wider font-[900] text-2xl pb-3">Get to know me!</h3>
        <p className="text-[#555555] text-base sm:text-lg md:text-lg lg:text-xl leading-loose">I'm a <span className="font-[900]">Frontend Focused Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="font-[900]"><Link to="/projects">Projects</Link></span>  section.
          I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="text-violet-600 font-[800]"><a href="https://www.linkedin.com/feed/">Linkedin</a></span> and <span className="text-violet-600 font-[800]"><a href="https://www.youtube.com/@chandangautam5763">Youtube</a></span>  where I post useful content related to <span className="font-[900]">Web Development</span>  and Programming
          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
        <button className="mt-8 bg-[#7843E9] py-3 px-6 font-bold rounded text-white tracking-wider text-base sm:text-lg md:text-xl hover:bg-violet-700 transition-colors"><Link to="/contact">CONTACT</Link> </button>
      </div>

      <div className="md:w-1/3">
        <h3 className="tracking-wider font-[900] text-2xl pb-6 text-left">My Skills</h3>
        <div className="flex flex-wrap gap-2">
          {
            ["React", "Javascript", "Tailwindcss", "Bootstrap", "Github", "CSS3", "HTML5", "Photoshop", "VS Code"].map((skill, index) => (
              <button key={index} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm sm:text-base md:text-lg px-4 py-2 text-center">{ skill }</button>
            ))
          }
      </div>
    </div>
    </div>
    </>
  )
}

export default About