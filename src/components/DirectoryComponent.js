import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
    render() {
        const directory = this.props.locations.map(location => {
            return (
                <div key={location.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(location.id)}>
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
            </div>
        );
    }
}

export default Directory;