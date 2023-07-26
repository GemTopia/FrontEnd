import React, { Fragment, useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import ProfileGames from "../components/games/ProfileGames";
import ProfileEdit from "../components/profile/ProfileEdit";
import Header from "../components/layout/Header";
import axios, * as others from "axios";
import profileUser from "../models/profileUser";
import { baseUrl } from "../shares/shared";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import profile from "../assets/Profile.svg";
const Profile: React.FC = () => {
  // let dummy: profileGameItem[] = [
  //   {
  //     name: "subway",
  //     image_name: "pic.png",
  //     score: 135,
  //     id: "0",
  //   }
  // ];
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
    if (profileUser)
      window.navigator.clipboard.writeText(profileUser.referrer_code);

    setReferralCopy(true);
    // setTimeout(() => {
    //   setReferralCopy(false);
    // }, 2000);
  };
  const [avatar, setAvatar] = useState();
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/"); // console.log(param.username);
    axios
      .get(
        `${baseUrl}users/profile/?user=${
          param.username && param.usernaem !== localStorage.getItem("username")
            ? param.username
            : localStorage.getItem("username")
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(function (response) {
        const user = response.data;
        // console.log(user);
        setProfileUser(user);
        // setAvatar(avatar);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, [isEdit]);

  return (
    <Fragment>
      <Header />
      <div className={styles["right-side-pic"]}></div>
      <div className={styles["left-side-pic"]}></div>
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
                {profileUser?.avatar ? (
                  <img
                    src={baseUrl + profileUser.avatar}
                    className={styles.avatar}
                  />
                ) : (
                  <img src={profile} />
                )}
              </div>
              <div className={styles["header-info"]}>
                <h2>{profileUser?.user_name}</h2>
                {!param.username && <h3>{profileUser?.email}</h3>}
              </div>
              {!param.username && (
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className={styles["edit-icon"]}
                  onClick={editHandler}
                />
              )}
            </div>
            {profileUser &&
              profileUser.links.length > 0 &&
              profileUser.links.find((item) => item.link) && (
                <div className={styles["social-media"]}>
                  {profileUser.links.map((link, index) => {
                    if (link.link)
                      return (
                        <a href={link.link} target="balnk" key={index}>
                          {" "}
                          <img
                            src={require(`../assets/social-media/${link.name}.png`)}
                            alt={link.name}
                          />{" "}
                        </a>
                      );
                  })}
                  {/* <a href="/" target="balnk">
                {" "}
                <img src={youtube} alt="youtube" />{" "}
              </a> */}
                </div>
              )}
            <div className={styles["info-form"]}>
              {!param.username && <h3>user name</h3>}
              {!param.username && (
                <p className={styles.username}>{profileUser?.user_name}</p>
              )}

              {profileUser?.bio && (
                <Fragment>
                  {" "}
                  <h3>bio</h3>
                  <p className={styles.bio}>{profileUser.bio}</p>
                </Fragment>
              )}
            </div>
            <div className={styles["footer-container"]}>
              {!param.username && (
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
                      {profileUser?.referrer_code}
                    </span>
                  )}
                </div>
              )}
              {profileUser && <ProfileGames games={profileUser.user_game} />}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
export default Profile;
