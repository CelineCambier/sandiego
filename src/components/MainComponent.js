import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import LocationInfo from './LocationInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LOCATIONS } from '../shared/locations';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: LOCATIONS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    location={this.state.locations.filter(location => location.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const LocationWithId = ({ match }) => {
            return (
                <LocationInfo
                    location={this.state.locations.filter(location => location.id === +match.params.locationId)[0]}
                    comments={this.state.comments.filter(comment => comment.locationId === +match.params.locationId)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory locations={this.state.locations} />} />
                    <Route path='/directory/:locationId' component={LocationWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;