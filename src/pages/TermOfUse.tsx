import React, { Fragment, useState } from "react";
import style from "./TermOfUse.module.css";
import Header from "../components/layout/Header";

const TermOfUse = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setHoveredImage(index);
  };
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(event.currentTarget.name);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Fragment>
      <Header />
      <div className={style.container}>
        <h1>Term of Use</h1>
        <hr />
        <nav className={style["short-cut-container"]}>
          <button onClick={clickHandler} name="service-definition">
            Service definition
          </button>
          <button onClick={clickHandler} name="term-of-use">
            Terms of use
          </button>
          <button onClick={clickHandler} name="privacy">
            Privacy
          </button>
          <button onClick={clickHandler} name="legal-responsibility">
            Legal Responsibility
          </button>
          <button onClick={clickHandler} name="changes-to-the-rules">
            Changes to The Rules
          </button>
          <button onClick={clickHandler} name="access">
            Suspension and termination of access
          </button>
          <button onClick={clickHandler} name="contact-us">
            contact us
          </button>
        </nav>
        <div className={style["descriptions-container"]}>
          <p className={style.title} id="service-definition">
            Service definition:
          </p>
          <p className={style.description}>
            On this site, the user can play different games and receive tokens
            from the site if they are eligible. It is a certain amount. It is
            possible that the agents of the decision-making site give prizes to
            users at certain times, and in this case, the prizes will be in the
            form of tokens and it is possible to withdraw them with Volts.
            Likewise, if the game has any problems or bugs. It can report so
            that site admins can track it.
          </p>
          <p className={style.title} id="term-of-use">
            Terms of Use
          </p>
          <p className={style.description}>
            To use the games on the site, register as a user in the system, then
            you will have access to all the games, and after collecting your
            tokens and passing the withdrawal limit, you can use your Metamask
            wallet to withdraw your tokens.
          </p>
          <p className={style.title} id="privacy">
            Privacy
          </p>
          <p className={style.description}>
            We can protect your information and security in every possible way.
            However, you should note that sending information over the Internet
            is always risky and no security system is 100% secure. For this
            reason, we do not make any guarantees regarding the absence of
            unauthorized access or hacking of your information. <br /> <br />
            As a user, you are fully responsible for your password, account
            information and other activities you do on the site. You are
            responsible for using a strong password and account information. If
            you notice any unauthorized or incorrect activity in your account or
            suspect that your security account is incorrect, you must notify us
            so that we can take the necessary measures. <br /> <br />
            Note that the user can register only one email on the site and
            cannot change the email due to the protection of user information.
          </p>
          <p className={style.title} id="legal-responsibility">
            Legal responsibility
          </p>
          <p className={style.description}>
            We can protect the security of the site and user information in any
            way. However, you should note that we do not give any permission
            regarding unauthorized access or hacking of the site or theft of
            users' information.
            <br />
            <br />
            As a user, you are fully responsible for any inappropriate use or
            violation of the site. Any incomplete, illegal or harmful use of the
            site or its contents that leads to the failure of the site,
            disruption of the operation of the site or the use of our services
            is prohibited.
            <br />
            <br />
            YOU AGREE THAT WE AND OUR EMPLOYEES AND AGENTS SHALL NOT BE LIABLE
            FOR ANY DAMAGES OF ANY KIND, INCLUDING INDIRECT, DIRECT,
            COMPENSATORY, SPECIAL OR TOTAL DAMAGES ARISING OUT OF OR INDIRECTLY
            RELATED TO YOUR USE OF THE SITE. This includes damages for loss,
            business interruption and systems failure, or other damages.
            <br />
            <br />
            Also, we are not responsible for the content posted by users. All
            illegal, abusive, threatening, abusive, spam, advertising or other
            posted by users may not be expressly provided by us and we are not
            responsible for it. Also, content that violates the intellectual or
            property rights of others is prohibited and must be reported to us.
            <br />
            <br />
            You just need to note that after using inappropriately, violation or
            the rules and regulations of the site can cause your account to be
            blocked or legal measures to be taken against you. Also, any fraud
            in obtaining scores or tokens will be checked by the admins and the
            user will be banned and won't have the received tokens.
            <br />
            <br />
            Unauthorized Prohibition: We use talented and capable developers to
            develop and operate our site, and we can open source the code used
            by the developers. If we include game source codes found from
            sources such as Git on our site, subject to the licenses and
            restrictions specified therein.
            <br />
            <br />
            Fulfillment of obligations: We are committed to respecting the
            intellectual property rights of others and preventing unauthorized
            use of the site's content and resources. If you believe that your
            intellectual property rights have been violated on this site, please
            contact us so that we can investigate and correct the issue.
          </p>
          <p className={style.title} id="changes-to-the-rules">
            Changes to the rules
          </p>
          <p className={style.description}>
            We have the right to change the rules and regulations of the site at
            any time without prior notice. These changes may be made due to
            improvements to the Services, changes in local laws or other
            relevant factors. <br />
            <br />
            When changes are made to the Site's rules and regulations, we will
            try to communicate these changes in appropriate ways, such as
            sending notices to users via email, posting notices on the Site, or
            receiving confirmation from users when they log into the Site.{" "}
            <br />
            <br />
            By using our site and continuing to use our services after the
            changes are made, you implicitly agree to the changes in the rules
            and regulations of the site. If you do not agree with the changes,
            you can stop using our site.
            <br />
            <br />
            The best way to be aware of changes to the site's rules and
            regulations is to constantly check the site's rules and regulations
            page. Please check this page periodically to be aware of changes and
            to read and understand them carefully.
          </p>
          <p className={style.title} id="access">
            Suspension and termination of access
          </p>
          <p className={style.description}>
            We have the right to suspend or terminate users' access to their
            account or to tokens in case of violation of the rules and
            regulations of the site or any illegal activity carried out by
            users. This includes suspending or cutting access to all or part of
            the tokens. <br />
            <br />
            Please note that if you have tokens on our site and get banned for
            any reason, you will lose access to your tokens and will not be able
            to receive and use them.
            <br />
            Suspension and termination of access to tokens can be done due to
            violation of site rules, publication of false information or other
            violations. These measures are to maintain the safety and health of
            the site and other users.
            <br />
            <br />
            Please note that if access to tokens is suspended or terminated, we
            are not responsible for any damages or losses resulting from this
            action.
          </p>
          <p className={style.title} id="contact-us">
            contact us
          </p>
          <p className={style.description}>
            You can communicate with us in case of any problem or error and
            register a report with one of our communication methods. Please note
            that we will respond to you as soon as possible, but our response
            time may vary and may take some time depending on the volume of
            requests. We strive to provide you with the best support services.
          </p>
          <p className={style["social-media-title"]}>
            Ways of communication with us:
          </p>
          <div className={style["social-media-container"]}>
            <img
              src={require(`../assets/social-media/footer/${
                hoveredImage === 0 ? "hovered telegram.png" : "telegram.png"
              }`)}
              alt="telegram"
              onMouseEnter={() => handleHover(0)}
              onMouseLeave={() => handleHover(null)}
            />
            <img
              src={require(`../assets/social-media/footer/${
                hoveredImage === 1 ? "hovered twitter.png" : "twitter.png"
              }`)}
              alt="twitter"
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(null)}
            />
            <img
              src={require(`../assets/social-media/footer/${
                hoveredImage === 2 ? "hovered discord.png" : "discord.png"
              }`)}
              alt="discord"
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(null)}
            />
            <img
              src={require(`../assets/social-media/footer/${
                hoveredImage === 3 ? "hovered gmail.png" : "gmail.png"
              }`)}
              alt="telegram"
              onMouseEnter={() => handleHover(3)}
              onMouseLeave={() => handleHover(null)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TermOfUse;
