import React, { useEffect, useState } from 'react';
import SanityClient from '../client.js';

function Projects() {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        SanityClient.fetch(`*[_type=="project"] {
            title,
            coverImage{
                asset->{
                    _id,
                    url,
                } ,
                alt
            },
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`).then((data) => {
            setProjectData(data)
            // console.log('data', data)
        }).catch((error) => {
            console.log('error', error)
        })
    }, [])

    return (
        <main className='bg-green-100 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl justify-center cursive text-center'>My Projects</h1>
                <h2 className='text-lg text-gray-600 mb-12 flex justify-center my-3'>Welcome to my projects page</h2>
                <section className='grid grid-cols-2 gap-8'>
                    {projectData?.map((project, index) => {
                        return(
                            <article className='relative rounded-lg shadow-xl bg-white p-16' key={index}>
                                <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                                    <a
                                        href={project?.link}
                                        target={'_blank'}
                                        rel={'noopener noreferrer'}
                                    >
                                        {project?.title}
                                    </a>
                                </h3>
                                <div className='text-gray-500 text-xs space-x-4'>
                                    <span>
                                        <strong className='font-bold'>
                                            Finished on
                                        </strong>&nbsp;:
                                        {new Date(project?.date)?.toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className='font-bold'>
                                            Company
                                        </strong>&nbsp;:
                                        {project?.place}
                                    </span>
                                    <span>
                                        <strong className='font-bold'>
                                            Type
                                        </strong>&nbsp;:
                                        {project?.projectType}
                                    </span>
                                    <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                        {project?.description}
                                    </p>
                                    <a
                                        href={project?.link}
                                        rel={'noopener noreferrer'}
                                        target={'_blank'}
                                        className={'text-red-500 font-bold hover:text-red-400 text-xl'}
                                    >
                                        View the Project{" "}
                                        <span aria-label={"right-pointer"}>
                                            👉
                                        </span>
                                    </a>
                                </div>
                            </article>
                        )
                    })}
                </section>
            </section>
        </main>
    )
}

export default Projects;
