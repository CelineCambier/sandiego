import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPartner({ partner }) {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={partner.image} alt={partner.name} width="150" />
                <Media body className="ml-5 mb-4">
                    <Media heading>
                        {partner.name}
                    </Media>
                    {partner.description}
                </Media>
            </React.Fragment>
        );
    }
    return <div />;
}

function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <p>California's second largest city and the United States' eighth largest, San Diego boasts a citywide population of nearly 1.3 million residents and more than 3 million residents countywide. Within its borders of 4,200 sq. miles, San Diego County encompasses 18 incorporated cities and numerous other charming neighborhoods and communities, including downtown's historic Gaslamp Quarter, Little Italy, Coronado, La Jolla, Del Mar, Carlsbad, Escondido, La Mesa, Hillcrest, Barrio Logan and Chula Vista just to name a few.

San Diego is renowned for its idyllic climate, 70 miles of pristine beaches and a dazzling array of world-class family attractions. Popular attractions include the world-famous San Diego Zoo and San Diego Zoo Safari Park, SeaWorld San Diego and LEGOLAND California. San Diego offers an expansive variety of things to see and do, appealing to guests of all ages from around the world.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">Places to visit</dt>
                                <dd className="col-6">63</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;