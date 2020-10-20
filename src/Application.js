import React from 'react';
import { Services } from './http-services';
import { CustomMap } from './CustomMap';
import { Infos } from './Infos';


export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            currentCountry: null
        };
    }
    onCountryClick = country => {
        this.setState({
            currentCountry: country
        });
    };
    render() {
        return <>
            <CustomMap onCountryClick={this.onCountryClick} allCountries={this.state.allCountries} />
            <Infos currentCountry={this.state.currentCountry} />
        </>;
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
    }
}