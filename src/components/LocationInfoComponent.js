import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class LocationInfo extends Component {
    renderLocation(location) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={location.image} alt={location.name} />
                    <CardBody>
                        <CardTitle>{location.name}</CardTitle>
                        <CardText>{location.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {
                        comments.map((comment) =>
                            <p key={comment.id}>
                                <div>{comment.text}</div>
                            -- <small>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</small>
                            </p>
                        )
                    }
                </div>
            );
        }
        return <div />
    }

    render() {
        if (this.props.location) {
            return <div className="row">
                {this.renderLocation(this.props.location)}
                {this.renderComments(this.props.location.comments)}
            </div>;
        } else {
            return <div />;
        }
    }
}

export default LocationInfo;