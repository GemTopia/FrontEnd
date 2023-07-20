import React, { Fragment, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import youtube from "../assets/social-media/youtube.png";
import discord from "../assets/social-media/discord.png";
import twitch from "../assets/social-media/twitch.png";
import steam from "../assets/social-media/steam.png";
import instagram from "../assets/social-media/instagram.png";
import telegram from "../assets/social-media/telegram.png";
import ProfileGames from "../components/games/ProfileGames";
import profileGameItem from "../models/profileGameItem";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProfileEdit from "../components/profile/ProfileEdit";
import smile from "../assets/smile.png";
import Header from "../components/layout/Header";
import axios, * as others from "axios";
import profileUser from "../models/profileUser";
import { baseUrl } from "../shares/shared";

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
  const [profileUser, setProfileUser] = useState<profileUser>();
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
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    axios
      .get(
        `${baseUrl}users/profile/?user=${localStorage.getItem("username")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        const user = response.data;
        setProfileUser(user);
        setAvatar(avatar);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [isEdit]);

  return (
    <Fragment>
      <Header />
      <div className={styles.container}>
        {isEdit ? (
          <ProfileEdit
            profileUser={profileUser}
            cancelEdit={cancleEditHandler}
          />
        ) : (
          <Fragment>
            <div className={styles["profile-header"]}>
              <div className={styles["profile-img-container"]}>
                {/* {profileUser?.avatar ? (
                  <img
                    src={require(`../../../../gemtopia-back/BackEnd/BackEnd/media${profileUser.avatar}`)}
                  ></img>
                ) : ( */}
                  <FontAwesomeIcon
                    icon={faUser}
                    className={styles["user-icon"]}
                  />
                {/* )} */}
                {/* ../../gemtopia-back/BackEnd/BackEnd/media${profileUser.avatar}` */}
              </div>
              <div className={styles["header-info"]}>
                <h2>{profileUser?.user_name}</h2>
                <h3>{profileUser?.email}</h3>
              </div>
              <FontAwesomeIcon
                icon={faPenToSquare}
                className={styles["edit-icon"]}
                onClick={editHandler}
              />
            </div>
            <div className={styles["social-media"]}>
              <a href="/" target="balnk">
                {" "}
                <img src={youtube} alt="youtube" />{" "}
              </a>
              <a href="/" target="balnk">
                {" "}
                <img src={discord} alt="discord" />{" "}
              </a>
              <a href="/" target="balnk">
                {" "}
                <img src={twitch} alt="twitch" />{" "}
              </a>
              <a href="/" target="balnk">
                {" "}
                <img src={steam} alt="steam" />{" "}
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
            <div className={styles["info-form"]}>
              <h3>user name</h3>
              <p className={styles.username}>{profileUser?.user_name}</p>

              <h3>bio</h3>

              <p className={styles.bio}>{profileUser?.bio}</p>
            </div>
            <div className={styles["footer-container"]}>
              <div className={styles.referral}>
                <button onClick={referralHandler}>
                  <FontAwesomeIcon
                    icon={faLink}
                    className={styles["referral-icon"]}
                  />
                  Referral code
                </button>
                {referralCopy && (
                  <span className={styles["referral-copy"]}>
                    Link copied <img src={smile} alt="smile" />
                  </span>
                )}
              </div>
              <ProfileGames games={profileUser?.user_games} />
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
export default Profile;
