import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/dist/index.js';
import SanityClient from '../client.js';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

function Post() {
    const [postData, setPostData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        SanityClient.fetch(`*[_type == "post"] {
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url,
                } ,
                alt
            }
        }`).then((data) => {
            setPostData(data)
        })
    }, []);

    return (
        <main className='bg-green-100 min-h-screen p-12'>
            <section className='container mx-auto '>
                <h1 className='text-5xl flex justify-center cursive'>Blog Post Page</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12 my-3'>Welcome Blog post page</h2>
                <div className='grid md:grid-cols-2 lg:gid-cols-3 gap-8'>
                        {postData?.map((post, index) => {
                            return (
                                <Card className={'container mx-auto bg-red-700 border-l-8 border-green-400'} key={index}>
                                    <Link to={"/post/"+post?.slug?.current} key={post?.slug?.current}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={post?.mainImage?.asset?.url}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {post?.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                    </Link>
                                </Card>
                            )
                        })}
                    {/* </article> */}
                </div>
            </section>
        </main>
    )
}

export default Post
