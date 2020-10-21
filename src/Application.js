import React from 'react';
import { Services } from './http-services';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToDo } from './pages/ToDo';

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
        return <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home
                        onCountryClick={this.onCountryClick}
                        allCountries={this.state.allCountries}
                        currentCountry={this.state.currentCountry} />
                </Route>
                <Route render={props => <ToDo  {...props} />} exact path="/todo" />
            </Switch>
        </BrowserRouter>
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });
    }
}