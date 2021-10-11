import { useState } from "react";
import { COMMENT_POST } from "../../Api";
import {ReactComponent as Enviar} from '../../assets/enviar.svg';
import useFetch from "../../Hooks/useFetch";

const PhotoCommentsForm = ({id}) => {
    const {request, error} = useFetch()
    const [comment, setComment] = useState();

    async function handleSubmit(event) {
        event.preventDefault();
        const {url, options} = COMMENT_POST(id, {comment});
        await request(url, options)
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                id="comment"
                name="comment"
                placeholder="Comente..."
                value={comment}
                onChange={({target}) => setComment(target.value)}

            />
            <button>
                <Enviar />
            </button>
        </form> 
    )
}

export default PhotoCommentsForm;