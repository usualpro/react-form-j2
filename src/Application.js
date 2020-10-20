import React from 'react';
import { Services } from './http-services';
export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: []
        };
    }
    render() {
        const Children = () => this.props.children;
        return <div>
            {JSON.stringify(this.state)}
            <Children />
        </div>;
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
    }
}