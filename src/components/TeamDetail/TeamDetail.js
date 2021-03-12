import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png';
import female from '../../images/female.png';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faFlag,faFutbol,faVenusMars,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { BannerImgContext } from '../../App';
import logo from '../../images/logo.png';
import {  faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const TeamDetail = () => {
    const [bannerImg, setBannerImg] = useContext(BannerImgContext);
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId]);
    const {strTeam,intFormedYear,strCountry,strGender,strDescriptionEN,strStadiumDescription,strTwitter,strFacebook,strYoutube} = team;
    let genderImg;
    if(strGender === "Male"){
        genderImg = <img className="img-fluid" src={male} alt=''/>;
    }
    if(strGender === "Female"){
        genderImg = <img className="img-fluid" src={female} alt=''/>;
    }

    return (
        <div>
            <div className="container p-4 text-white">
                <div className="d-flex justify-content-end mb-5">
                    <Link to='/home'>
                        <button onClick={()=> setBannerImg(logo)} className="btn btn-outline-success">
                            <FontAwesomeIcon className="icons" icon={faArrowLeft} /> back to home
                        </button>
                    </Link>
                </div>
                <div className="bg-success p-3 team-detail">
                    <div className="row">
                        <div className="col-12 col-lg-7 d-flex align-items-center">
                            <div>
                                <h2>{strTeam} <img className="team-logo" src={bannerImg} alt=""/></h2>
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
                <div className="my-5">
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div><a href={`https://${strTwitter}`}><FontAwesomeIcon className="social-icons" icon={faTwitter} /></a></div>  
                    <div><a href={`https://${strFacebook}`}><FontAwesomeIcon className="social-icons" icon={faFacebook} /></a></div>
                    <div><a href={`https://${strYoutube}`}><FontAwesomeIcon className="social-icons" icon={faYoutube} /></a> </div> 
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;