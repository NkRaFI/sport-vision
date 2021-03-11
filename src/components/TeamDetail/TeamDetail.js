import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png';
import female from '../../images/female.png';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faFlag,faFutbol,faVenusMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId]);
    const {strTeam,intFormedYear,strCountry,strGender,strDescriptionEN} = team;
    let genderImg;
    if(strGender === "Male"){
        genderImg = <img className="img-fluid" src={male} alt=''/>;
    }
    else{
        genderImg = <img className="img-fluid" src={female} alt=''/>;
    }

    return (
        <div className="container p-4 text-white">
            <div className="bg-success p-3 team-detail">
                <div className="row">
                    <div className="col-12 col-lg-7 d-flex align-items-center">
                        <div>
                            <h2>{strTeam}</h2>
                            <p><FontAwesomeIcon className="icons" icon={faMapMarker} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon className="icons" icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon className="icons" icon={faFutbol} /> Sport Type: Football</p>
                            <p><FontAwesomeIcon className="icons" icon={faVenusMars} /> Gender: {strGender}</p>
                            </div>
                    </div>
                    <div className="col-12 col-lg-5">
                    {
                        genderImg
                    }
                    </div>
                </div>
            </div>
            <div className="my-4">
                <p>{strDescriptionEN}</p>
            </div>
        </div>
    );
};

export default TeamDetail;