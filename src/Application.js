import React from 'react';
import { Services } from './http-services';
import { CustomMap } from './CustomMap';


export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: []
        };
    }
    render() {
        return <CustomMap allCountries={this.state.allCountries} />;
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
    }
}