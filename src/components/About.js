import React, { useEffect, useState } from 'react';
import SanityClient from '../client.js';
import bg from '../bg.JPG';
const BlockContent = require('@sanity/block-content-to-react');

function About() {
    const [author, setAuthor] = useState([]);

    useEffect(() => {
        SanityClient.fetch(
            `*[_type == "author"] {
            name,
            bio,
            "authorImage": image.asset->url,
            }`
        ).then((data) => {
                setAuthor(data[0])
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    if (!author) return (<div>Loading...</div>)
    // console.log('author', author)
    return (
        <main className='relative'>
            <img src={bg} alt={'NA'} className={'absolute w-full '} />
            <div className='p-10 lg:pt-48 containe mx-auto relative'>
                <section className='bg-green-800 rounded-lg shadow-2xl lg:flex p-20'>
                    <img src={author?.authorImage} className={'rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'} alt={'no author'} />
                    <div className='text-lg flex flex-col justify-center'>
                        <h1
                            className='cursive text-6xl text-green-300 mb-4'
                        >
                            Hey ThereI am {" "}
                            <span className='text-green-100'>
                                {author?.name}
                            </span>
                        </h1>
                        <div className='text-white'>
                            <BlockContent
                                blocks={author?.bio}
                                projectId={"glb0jbrj"}
                                dataset={"production"}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About
