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
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";


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
    // code below has bug in it

    const [beProtected , setBeProtected] = useState<boolean>(false);
    const toggleHandler=() => {
        setBeProtected(beProtected=>!beProtected);

    }


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
    const [isEdit , setIsEdit] = useState<boolean>(false);
    const [Content , setContent] = useState<any>(content);
    const editHandler = () => {
        setIsEdit(true);
        setContent(<div className={style.editContect}>
            <a className={style.changPassword}>change password</a>
            <form >
                <label htmlFor="showScores" className={style.toggleLable}>show scores in public</label>
                <input type="checkbox" onChange={toggleHandler}  checked={!beProtected}/><br />
                <input type="submit" className={style.submitEditButton} />
            </form>
        </div>);
        
    };
    const cancleEditHandler = () => {
        setIsEdit(false);
        setContent(<div>
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
        </div>);
        
    };

    
    

    return(
        <div className={style.container}>
            <div className={style['profile-container']} style={{height:isEdit?'31rem':'35rem'}}>
                
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
                    {!isEdit?
                    <button onClick={editHandler} className={style['edit-icon']}>
                    <FontAwesomeIcon icon={faPenToSquare}   className={style['edit-icon']} /></button>:
                    <button onClick={cancleEditHandler} className={style['edit-icon']}>
                    <FontAwesomeIcon icon={faXmark} className={style['edit-icon']} /></button>}
                </div>
                    
                <div className={style['social-media']}>
                    <a href="/"> <img src={youtube} /> </a>
                    <a href="/"> <img src={discord} /> </a>
                    <a href="/"> <img src={twitch} /> </a>
                    <a href="/"> <img src={steam} /> </a>
                </div>
                <div className={style['info-box']}>
                    <form action="">
                        <label htmlFor="username">user name</label><br />
                        {!isEdit?<input type="text" id="username" readOnly className={style.username} value={'jasmine_dragon'}/>:
                        
                        <input type="text" id="username" className={style.usernameEdit} value={'jasmine_dragon'}/>}
                        <br />
                        <label htmlFor="bio">bio</label><br />
                        

                        <textarea id="bio" className={!isEdit?style.bio:style.bioEdit} cols={35}rows={3} readOnly={!isEdit} value="I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses" ></textarea>
                    </form>
                    {/* <h3>user name</h3>
                    <p>jasmine_dragon</p>
                    <h3>bio</h3>
                    <p>I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses.</p> */}
                </div>
                <div>
                    {Content}
                </div>
            </div>
        </div>
    );
}
export default Profile;