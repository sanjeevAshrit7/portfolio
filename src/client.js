// import  {sanityClient}  from '@sanity/client/sanityClient'; 
import SanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export default SanityClient ({
    projectId:"glb0jbrj",
    dataset: "production"
});

// const config ={
//     projectId: 'glb0jbrj',
//     dataset: 'production',
//     apiVersion: '2022-10-18',
//     useCdn: false
// };
const builder = imageUrlBuilder(SanityClient);

export function urlFor(source) {
    return builder.image(source)
}


