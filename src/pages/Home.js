import React from "react";
import { Link } from "react-router-dom";
import { CustomMap } from "../CustomMap";
import { Infos } from "../Infos";

export const Home = (props) => (
  <>
    <CustomMap
      onCountryClick={props.onCountryClick}
      allCountries={props.allCountries}
    />
    <div className="container-fluid">
      <div className="row justify-content-center my-3">
        <div className="col text-center">
          <Link className="btn btn-primary" to="/todo">
            Voir la liste des todos
          </Link>
        </div>
        <div className="col text-center">
          <Link className="btn btn-primary" to="/posts">
            Voir la liste des posts
          </Link>
        </div>
      </div>
    </div>

    <Infos currentCountry={props.currentCountry} />
  </>
);
