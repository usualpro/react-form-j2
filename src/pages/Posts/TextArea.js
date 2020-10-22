import React, { useRef } from "react";
import { Services } from '../../http-services/posts_service';
import PostObservable from "../../stores/PostObservable";

export const TextArea = () => {
  const textAreaRef = useRef(null)
  const onButtonCLick = () => {
    Services.addAPost(textAreaRef.current.value).then(() => {
      PostObservable.listPost();
    });
  }
  return <>
    <textarea
      ref={textAreaRef}
      rows="5"
      className="form-control form-group"
      cols="33"
      defaultValue={"It was a dark and stormy night..."}
    />
    <button onClick={onButtonCLick} className="btn btn-danger btn-block">Soumettre le post</button>
  </>;
}