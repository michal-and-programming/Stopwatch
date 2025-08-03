import styles from './Stopwatch.module.scss';

const Stopwatch = ({ time }) => {
  const formatTime = (milliseconds) => {
    const ms = milliseconds % 1000;
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 60000) % 60;
    const hours = Math.floor(milliseconds / 3600000);
    //String is a function that converts a value to a string
    //padStart first value number of characters second what to enter if there is less than we specified
    return(
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0") + "." +
      String(ms).padStart(3, "0")
    );
  };

  return <div className={styles.stopwatch}>{formatTime(time)}</div>;
};

export default Stopwatch;