import React from "react";
import ProfileGameItem from "./ProfileGameItem";
import style from "./ProfileGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import gameItem from "../../models/models";

const ProfileGames:React.FC<{games:gameItem[]}> = (props) => {

    return(
        <div className={style.ContentContainer}>
            <div className={style.title}>
                <p className={style['score-title']}>scores</p>
                <div className={style.up}><FontAwesomeIcon icon={faAngleUp} /></div>
                <div className={style.down}><FontAwesomeIcon icon={faAngleDown} /></div>
            </div>

            <div className={style['game-container']}>
                {/*props.games.map((game,index) => {
                    <ProfileGameItem key={game.name} index={index} game={game} />
                    })
                */}
                <ProfileGameItem key={props.games[0].name} index={0} game={props.games[0]} />
                <ProfileGameItem key={props.games[1].name} index={1} game={props.games[1]} />
                <ProfileGameItem key={props.games[2].name} index={2} game={props.games[2]} />
                <ProfileGameItem key={props.games[3].name} index={3} game={props.games[3]} />
                <ProfileGameItem key={props.games[4].name} index={4} game={props.games[4]} />
                <ProfileGameItem key={props.games[5].name} index={5} game={props.games[5]} />
                <ProfileGameItem key={props.games[6].name} index={6} game={props.games[6]} />
                <ProfileGameItem key={props.games[7].name} index={7} game={props.games[7]} />

            </div> 
        </div>
    )

}

export default ProfileGames;