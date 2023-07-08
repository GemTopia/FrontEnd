import React, { Fragment, useState } from "react";
import style from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";
import twitch from "../assets/twitch.png";
import steam from "../assets/steam.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import ProfileGames from "../components/games/ProfileGames";
import profileGameItem from "../models/profileGameItem";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import useInput from "../components/hooks/use-input";
import ProfileEdit from "../components/ProfileEdit";
import smile from "../assets/smile.png";
const Profile: React.FC = () => {
  let dummy: profileGameItem[] = [
    {
      name: "subway",
      image_name: "pic.png",
      score: 135,
      id: "0",
    },
    {
      name: "angry birds",
      image_name: "pic.png",
      score: 123,
      id: "1",
    },
    {
      name: "angry birds2",
      image_name: "pic.png",
      score: 125,
      id: "2",
    },
    {
      name: "angry birds3",
      image_name: "pic.png",
      score: 126,
      id: "3",
    },
    {
      name: "subway2",
      image_name: "pic.png",
      score: 145,
      id: "4",
    },
    {
      name: "angry birds4",
      image_name: "pic.png",
      score: 157,
      id: "5",
    },
    {
      name: "angry birds5",
      image_name: "pic.png",
      score: 177,
      id: "6",
    },
    {
      name: "angry birds6",
      image_name: "pic.png",
      score: 156,
      id: "7",
    },
  ];

  const [beProtected, setBeProtected] = useState<boolean>(false);
  const toggleHandler = () => {
    setBeProtected((beProtected) => !beProtected);
  };
  const [referralCopy, setReferralCopy] = useState(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const editHandler = () => {
    setIsEdit(true);
  };
  const cancleEditHandler = () => {
    setIsEdit(false);
  };

  const referralHandler = () => {
    setReferralCopy(true);
    setTimeout(() => {
      setReferralCopy(false);
    }, 2000);
  };
  return (
    <div className={style.container}>
      <div className={style["profile-header"]}>
        <div className={style["profile-img-container"]}>
          <FontAwesomeIcon icon={faUser} className={style["user-icon"]} />
        </div>
        <div className={style["header-info"]}>
          <h2>Profile</h2>
          <h3>sara.namdar@gmail.com</h3>
        </div>
        {!isEdit ? (
          <FontAwesomeIcon
            icon={faPenToSquare}
            className={style["edit-icon"]}
            onClick={editHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={faXmark}
            className={style["edit-icon"]}
            onClick={cancleEditHandler}
          />
        )}
      </div>

      {isEdit ? (
        <ProfileEdit />
      ) : (
        <Fragment>
          <div className={style["social-media"]}>
            <a href="/" target="balnk">
              {" "}
              <img src={youtube} />{" "}
            </a>
            <a href="/" target="balnk">
              {" "}
              <img src={discord} />{" "}
            </a>
            <a href="/" target="balnk">
              {" "}
              <img src={twitch} />{" "}
            </a>
            <a href="/" target="balnk">
              {" "}
              <img src={steam} />{" "}
            </a>
            <a href="/" target="balnk">
              {" "}
              <img src={instagram} alt="instagram" />{" "}
            </a>
            <a href="/" target="balnk">
              {" "}
              <img src={telegram} alt="telegram" />{" "}
            </a>
          </div>
          <div className={style["info-form"]}>
            <h3>user name</h3>
            <p className={style.username}>Jasmin-Drogon</p>

            <h3>bio</h3>

            <p className={style.bio}>
              I'm Mathias Yeo, and I'm passionate about writing engaging content
              for businesses
            </p>
          </div>
          <div className={style["footer-container"]}>
            <div className={style.referral}>
              <button onClick={referralHandler}>Referral code</button>
              {referralCopy && (
                <span className={style["referral-copy"]}>
                  Link copied <img src={smile} alt="smile" />
                </span>
              )}
            </div>
            <ProfileGames games={dummy} />
          </div>
        </Fragment>
      )}
    </div>
  );
};
export default Profile;
