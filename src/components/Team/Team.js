import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BannerImgContext } from '../../App';

const Team = (props) => {
    const [bannerImg, setBannerImg] = useContext(BannerImgContext);
    const {idTeam,strTeam,strTeamBadge} = props.team;

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="team-cart mx-5 my-3 m-sm-3">
                <Card style={{ width: '22rem'}}>
                    <div className="p-3 d-flex justify-content-center">
                        <Card.Img variant="top" src={strTeamBadge} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text>Sports type: Football</Card.Text>
                            <Link to={`/team/${idTeam}`}>
                            <Button onClick={()=> setBannerImg(strTeamBadge)} variant="success">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                            </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Team;