import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderLocation({ location }) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={location.image} alt={location.name} />
                <CardBody>
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.location.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.location.name}</h2>
                        <hr />
                    </div>
                </div>
                <RenderLocation location={props.location} />
                <RenderComments comments={props.comments} />
            </div>
        );
    }
    return <div />;
}

export default LocationInfo;