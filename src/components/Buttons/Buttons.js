import styles from './Buttons.module.scss'

const Buttons = ({start, stop, reset}) => {
  return(
    <div>
      <button className={styles.button} onClick = {start}>START</button>
      <button className={styles.button} onClick = {stop}>STOP</button>
      <button className={styles.button} onClick = {reset}>RESET</button>
    </div>
  );
};

export default Buttons;