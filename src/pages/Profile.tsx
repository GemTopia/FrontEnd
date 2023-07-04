import React , {useState} from "react";
import style from "./Profile.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";
import twitch from "../assets/twitch.png";
import steam from "../assets/steam.png";
import ProfileGames from "../components/hooks/ProfileGames";
import gameItem from "../models/models";


const Profile : React.FC = () => {
    const [isHover , setIsHover] = useState<boolean>(false);

    const mouseEnterHandler = () => {
        setIsHover(true);
    }

    const mouseLeaveHandler = () => {
        setIsHover(false);
    }

    let dummy :gameItem[]=[
        {
            name:'subway',
            image_name:'pic.png',
            score:135
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:123
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:125
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:126
        },
        {
            name:'subway',
            image_name:'pic.png',
            score:145
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:157
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:177
        },
        {
            name:'angry birds',
            image_name:'pic.png',
            score:156
        },

        
    ]

    let content = <div>
        <div className={style.refer}>
                    <span 
                     onMouseEnter={mouseEnterHandler}
                     onMouseLeave={mouseLeaveHandler}
                     className={isHover ? style.hovered : style.noHover}
                     >
                        {isHover ? 'wXEdfWjh0tjbDyZIkhfd' : 'Refer a friend !'}
                    </span>
                </div>
                <ProfileGames games={dummy} />
    </div>

    return(
        <div className={style.container}>
            <div className={style['profile-container']}>
                <div className={style['first-box']}>
                    <div className={style['profile-img-container']}>
                    <FontAwesomeIcon 
                    icon={faUser}
                    className={style['user-icon']} 
                    />
                    </div>
                    <div className={style['info-container']}>
                        <h3>Profile</h3>
                        <p>sara.namdar@gmail.com</p>
                    </div> 
                    <FontAwesomeIcon icon={faPenToSquare} className={style['edit-icon']} />
                </div>
                <div className={style['social-media']}>
                    <a href="/"> <img src={youtube} /> </a>
                    <a href="/"> <img src={discord} /> </a>
                    <a href="/"> <img src={twitch} /> </a>
                    <a href="/"> <img src={steam} /> </a>
                </div>
                <div className={style['info-box']}>
                    <h3>user name</h3>
                    <p>jasmine_dragon</p>
                    <h3>bio</h3>
                    <p>I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses.</p>
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default Profile;