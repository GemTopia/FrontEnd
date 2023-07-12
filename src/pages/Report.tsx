import style from "./Report.module.css";
import useInput from "../components/hooks/use-input";
const Report: React.FC = () => {
  const {
    enteredValue: reportValue,
    isValid: reportIsValid,
    hasError: reportHasError,
    inputChangeHandler: reportChangeHandler,
    inputBlurHandler: reportBlurHandler,
  } = useInput(() => {},
  "I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses");
  return (
    <div className={style.pageContainer}>
      <div className={style.reportIssueContainer}>
        <div className={style.reportHeaderContainer}>
          <p className={style.HeaderTitle}>Report Issues</p>
          <p className={style.HeaderBody}>
            Thanks for reporting any issues you've encountered while playing the
            game. Our experts will work to fix any problems as soon as possible.
          </p>
        </div>
        <div className={style.reportInputContainer}>
          <p className={style.InputTitle}>Report</p>
          <form>
            <textarea
              className={style.reportInput}
              cols={35}
              rows={3}
              value={reportValue}
              onChange={reportChangeHandler}
              onBlur={reportBlurHandler}
            ></textarea>
            <button type="submit" className={style.submitEditButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={style.sidePicturesContainer}>
        
          <img
            src={require('../assets/characterReportBoy.png')}
            alt=""
            className={style.leftImage}
          />
        
        
          <img
            src={require('../assets/characterReportGirl.png')}
            alt=""
            className={style.rightImage}
          />
        
      </div>
    </div>
  );
};

export default Report;
