import yummateImg from '../assets/images/yummate.jpeg';
import taskmateImg from "../assets/images/taskmate.jpeg";
import cinemateImg from "../assets/images/cinemate.jpeg";

const Project = () => {

  const projects = [
    {
      id: 1,
      title: "Yummate",
      image: yummateImg,
      description: "Yummate is a fully responsive online food delivery app that lets users sign up, sign in, and browse a list of restaurants fetched via API. It includes key features like adding items to a cart, removing them, and a smooth, user-friendly interface for a seamless food ordering experience.",
      tags: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      id: 2,
      title: "Taskmate",
      image: taskmateImg,
      description: "Taskmate is a simple and responsive task management app where users can easily add, update, and delete tasks. It also features a background toggle button for a customizable look and feel, enhancing both usability and user experience.",
      tags: ["React", "CSS3", "API Integration"]
    },
    {
      id: 3,
      title: "Cinemate",
      image: cinemateImg,
      description: "Cinemate is a fully responsive movie search application where users can explore movies, view ratings and detailed information, and switch between dark and light modes using a toggle button. Designed for smooth browsing and a modern user experience.",
      tags: ["JavaScript", "HTML5", "CSS3", "API"]
    },
    {
      id: 4,
      title: "TaskMaster",
      image: "https://via.placeholder.com/600x400/535/fff?text=TaskMaster",
      description: "A productivity application that helps users manage their tasks with features like task categorization, due dates, and priority levels.",
      tags: ["React", "Tailwind CSS", "LocalStorage"]
    }
  ];

  return (
    <>
      <div className="text-center pb-10 z-20 mb-10 px-4 mt-20 pt-10">
        <h2 className="text-4xl sm:text-5xl font-[900] tracking-widest pt-10 pb-5">Projects</h2>
        <hr className="h-2 w-7 rounded bg-violet-600 border-none mb-5 mx-auto" />
        <p className="text-[#555555] text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">Here you will find some of my personal projects that I have created and with each project containing its own case study</p>
      </div>
      
      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="bg-[#7843E9] py-2 px-6 font-bold rounded text-white tracking-wider hover:bg-violet-700 transition-colors">
                  CASE STUDY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project