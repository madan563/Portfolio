"use client"

import React, {useState} from "react"
import Image from "next/image"
import project1 from "../../public/assets/proj8.png"
import project2 from "../../public/assets/proj13.png"


const projects = [
    {id: 1, year: 2024, title: 'AI calling system', description: "Advanced system", image: project1} ,
    {id: 2, year: 2024, title: 'Chatbot', description: "Advanced AI Chatbot", image: project2}  
];

export const Portfolio =() => {
    const [selectedProject, setSelectedProject] =useState(projects[0])
    return(
        <section id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-13">
                <div>
            <h2 className="text-6xl font-bold mb-10"><span className="text-purple-400">Projects</span></h2>
            {
                projects.map((project)=> (
                    <div
                    key={project.id}
                    onClick={()=> setSelectedProject(project)}
                    className="cursor-pointer mb-8 group"
                    >
                        <p className="text-purple-400 text-lg mb-2">{project.year}</p>
                        <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                        ${selectedProject.id===project.id? 'text-purple-200' : ' '}duration-300`}>
                            {project.title}
                            </h3>
                            {selectedProject.id ===project.id &&(
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )

                            }
                        {selectedProject.id ===project.id &&(
                            <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                {project.description}
                            </p>
                            
                        )}
                    </div>
                ))
            }
            </div>

            <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
            width={800}
            height={450}
            />
            </div>
        </section>
    )
}