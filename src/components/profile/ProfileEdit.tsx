import React, { FormEvent, Fragment, useState, useEffect } from "react";
import styles from "./ProfileEdit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "../../components/hooks/use-input";
import ChangePassword from "./ChangePassword";
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SocialEdit from "./SocialEdit";
import axios, * as others from "axios";
import profileUser from "../../models/profileUser";
import { baseUrl } from "../../shares/shared";
import profile from "../../assets/Profile.svg";

const ProfileEdit: React.FC<{
  profileUser: profileUser | undefined;
  cancelEdit: Function;
}> = (props) => {
  const [uploadedAvatar, setUploadedAvatar] = useState<File>();

  const [pageState, setPageState] = useState<String>("full-edit");
  const [hideButton, sethideButton] = useState<boolean>(
    props.profileUser ? (props.profileUser.hide_button ? true : false) : false
  );
  const {
    enteredValue: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput(
    (input: string) => input.trim().length !== 0,
    props.profileUser ? props.profileUser.user_name : " "
  );
  const {
    enteredValue: bioValue,
    isValid: bioIsValid,
    hasError: bioHasError,
    inputChangeHandler: bioChangeHandler,
    inputBlurHandler: bioBlurHandler,
  } = useInput(
    () => true,
    props.profileUser && props.profileUser.bio ? props.profileUser.bio : " "
  );
  const changePassHandler = () => {
    setPageState("change-pass");
  };
  const cancelHandler = () => {
    setPageState("full-edit");
  };
  const switchHandler = (event: any) => {
    sethideButton(event.target.checked);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (usernameIsValid && bioIsValid) {
      let formData = new FormData();

      if (uploadedAvatar) formData.append("file", uploadedAvatar);
      axios
        .put(
          `${baseUrl}users/profile/`,
          {
            avatar: uploadedAvatar,
            user_name: usernameValue,
            bio: bioValue,
            hide_button: hideButton,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          props.cancelEdit();
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
  };
  const editSocialHandler = () => {
    setPageState("social-edit");
  };
  const cancelEditHandler = () => {
    props.cancelEdit();
  };
  const uploadClickHandler = () => {
    const uploadInput = document.getElementById("upload");
    if (uploadInput) {
      uploadInput.click();
    }
  };
  const uploadChangeHandler = (event: any) => {
    if (event.target.files[0] && event.target.files[0].type === "image/png") {
      const file = event.target.files[0];
      // console.log(file);
      setUploadedAvatar(file);
    }
  };
  return (
    <Fragment>
      <div className={styles["profile-header"]}>
        <div
          className={styles["profile-img-container"]}
          onClick={uploadClickHandler}
        >
          {props.profileUser?.avatar ? (
            <img
              src={baseUrl + props.profileUser.avatar}
              className={styles.avatar}
            />
          ) : (
            <img src={profile} />
          )}
          <input
            type="file"
            name="upload"
            id="upload"
            hidden
            onChange={uploadChangeHandler}
          />
        </div>
        <div className={styles["header-info"]}>
          <h2>{props.profileUser?.user_name}</h2>
          <h3>{props.profileUser?.email}</h3>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles["edit-icon"]}
          onClick={cancelEditHandler}
        />
      </div>
      {pageState === "full-edit" ? (
        <Fragment>
          <div className={styles["social-media"]} onClick={editSocialHandler}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["edit-icon"]}
            />
            Edit social media
          </div>

          <form className={styles["info-form"]} onSubmit={submitHandler}>
            <label htmlFor="username">user name</label>
            <input
              name="username"
              type="text"
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              className={styles.usernameEdit}
              value={usernameValue}
            />

            <label htmlFor="bio">bio</label>

            <textarea
              className={styles.bioEdit}
              cols={35}
              rows={3}
              value={bioValue}
              onChange={bioChangeHandler}
              onBlur={bioBlurHandler}
            ></textarea>
            <button
              className={styles.changePassword}
              onClick={changePassHandler}
              type="button"
            >
              change password
            </button>
            <div>
              <label>Keep achivments hidden</label>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  onChange={switchHandler}
                  checked={hideButton}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            {hideButton && (
              <p className={styles.warning}>
                Scores and total gemyto remain hidden, but will be shown within
                each game. You won't appear in the top 20 players list. Click to
                reveal them
              </p>
            )}
            <button type="submit" className={styles.submitEditButton}>
              Submit
            </button>
          </form>
        </Fragment>
      ) : pageState === "change-pass" ? (
        <ChangePassword cancelChange={cancelHandler} />
      ) : (
        <SocialEdit cancelEditSocial={cancelHandler} />
      )}
    </Fragment>
  );
};

export default ProfileEdit;
