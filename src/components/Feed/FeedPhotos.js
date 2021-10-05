import styles from './Feed.module.css';
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../Api";
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

const FeedPhotos = () => {
    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        async function FetchPhotos(){
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
            const {response, json} = await request(url, options);
            console.log(json);
        }

        FetchPhotos();
    }, [request]);

    if(error) return <Error error={error}/>
    if(loading) return <Loading />
    if(data)
        return (
            <div>
                <ul className={`${styles.feed} animeLeft`}>
                    {data.map((photo) =>
                        <FeedPhotosItem key={photo.id} photo={photo}/>
                    )}
                </ul>
            </div>
        )
    else{
        return null
    }
}

export default FeedPhotos;