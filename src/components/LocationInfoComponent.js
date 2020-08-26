import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderLocation({ location }) {
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
    );
}

function RenderComments({ comments }) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.text}<br />
                        -- <small>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</small>
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
    return <div />
}

function LocationInfo(props) {
    if (props.location) {
        return (
            <div className="container">
                <div className="row">
                    <RenderLocation location={props.location} />
                    <RenderComments comments={props.location.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default LocationInfo;