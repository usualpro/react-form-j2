import React, { useRef } from 'react';
import PostObservable from "../../stores/PostObservable";

export const TextArea = () => {
  const textAreaRef = useRef(null);
  const onButtonCLick = () => PostObservable.addAPost(textAreaRef.current.value);
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