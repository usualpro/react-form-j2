import React, { useRef } from "react";
import PostObservable from '../../../stores/PostObservable';

export const ListItem = props => {
    const textAreaRef = useRef(null);
    const Comments = () => <ul className="list-group">
        {
            props.comments.map((e, i) =>
                <li className='list-group-item-secondary list-group-item' key={i}>
                    {e.content}
                </li>
            )
        }
    </ul>;

    const submitAComment = () => {
        const post_id = props.id;
        const content = textAreaRef.current.value;
        PostObservable.addAComment(content, post_id);
    }

    return <li className="list-group-item " aria-current="true">
        <h3>{props.content} <button onClick={() => PostObservable.deleteAPost(props.id)} className='btn btn-sm btn-secondary'>Supprimer le post</button></h3>
        <textarea
            ref={textAreaRef}
            rows="5"
            className="form-control form-group"
            cols="33"
            defaultValue={"Ajouter un commentaire"}
        />
        <button className='btn btn-warning mb-3' onClick={() => submitAComment()}>Soumettre un commentaire</button>
        <Comments />
    </li>;
};