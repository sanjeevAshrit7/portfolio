import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SanityClient, {urlFor} from '../client.js';

const BlockContent = require('@sanity/block-content-to-react');

function SinglePost() {

    const [singlePost, setSinglePost] = useState([]);
    const { slug } = useParams();

    useEffect(() => {
        SanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset -> {
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => {
            setSinglePost(data[0])
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    if(!singlePost) return <div>Loading...</div>

    return (
        <main className='bg-gray-200 min-h-screen p-12'>
            <article className='container shadow-lg mx-auto bg-green-100 rounded-lg'>
                <header className='relative'>
                    <div className='absolute h-full w-full flex items-center justify-center p-8'>
                        <div className='bg-white bg-opacity-75 rounded p-12'>
                            <h1 className='cursive text-3xl lg:text-6xl mb-4'>{singlePost?.title}</h1>
                            <div className='flex justify-center text-gray-800'>
                                <img src={singlePost?.mainImage?.asset?.url} alt={'spNA'} className={'w-10 h-10 rounded-full'}/>
                                <p className='cursive flex items-center pl-12 text-2xl'>{singlePost?.name}</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={singlePost?.mainImage?.asset?.url}
                        alt={'Not Available'}
                        className={'w-full object-cover rounded-t'}
                        style={{height: "400px"}}
                    />
                </header>
                <div className='px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full'>
                    <BlockContent blocks={singlePost?.body} projectId={"glb0jbrj"} dataset={"production"}/>
                </div>
            </article>
        </main>
    )
}

export default SinglePost;
