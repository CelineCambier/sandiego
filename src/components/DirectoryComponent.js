import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import LocationInfo from './LocationInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLocation: null
        };
    }

    onLocationSelect(location) {
        this.setState({ selectedLocation: location });
    }

    render() {
        const directory = this.props.locations.map(location => {
            return (
                <div key={location.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onLocationSelect(location)}>
                        <CardImg src={location.image} alt={location.name} />
                        <CardImgOverlay>
                            <CardTitle>{location.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <LocationInfo location={this.state.selectedLocation}></LocationInfo>
            </div>
        );
    }
}

export default Directory;