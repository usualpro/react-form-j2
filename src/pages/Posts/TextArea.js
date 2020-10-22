import React from "react";

export const TextArea = () => (
  <>
    <textarea
      rows="5"
      className="form-control form-group"
      cols="33"
      defaultValue={"It was a dark and stormy night..."}
    />
    <button className="btn btn-danger btn-block">Soumettre le post</button>
  </>
);
