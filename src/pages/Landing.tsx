import style from "./Landing.module.css";

const Landing = () => {

    return(
        <div className={style.container}>
            <div className={style["intro-container"]}>
                <div className={style["intro-content"]}>
                    <h1>Welcome to GemTopia</h1>
                    <p className={style.description}>Play various games here</p>
                    <p className={style.description}>Compete with others and get tokens.</p>
                    <p className={style["second-description"]}><span className={style["blue-txt"]}>Fun</span> and <span className={style["blue-txt"]}>earning</span> both together </p>
                    <button className={style["learn-more-button"]}>learn more</button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}

export default Landing;