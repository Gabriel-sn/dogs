import styles from './Feed.module.css';

const FeedPhotosItem = ({photo}) => {
    return (
        <li className={styles.photo}>
            <img src={photo.src} alt={photo.title}/>
            <span>{photo.acessos}</span>
        </li>
    )
}

export default FeedPhotosItem;