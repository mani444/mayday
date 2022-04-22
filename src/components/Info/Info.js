import styles from "./Info.module.scss";

const info = ({ text1, text2, classes }) => {
  let classes2 = [styles.Infobox, styles.Red].join(" ");
  let classes3 = [styles.Infobox, styles.Blue].join(" ");

  return (
    <div className={classes === "Red" ? classes2 : classes3}>
      <h3 style={{ margin: 0, marginTop: -4, fontWeight: "normal" }}>
        {text1}
      </h3>
      <h6
        style={{
          margin: 0,
          fontSize: "0.5em",
          fontWeight: "normal",
          textTransform: "uppercase",
        }}
      >
        {text2}
      </h6>
    </div>
  );
};

export default info;
