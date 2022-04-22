import styles from "./ImgZoom.module.scss";
import image from "../../assets/pic.png";

const ImgZoom = ({ handleShowPopup, popup }) => {
  //   let classes2 = [styles.Infobox, styles.Red].join(" ");
  //   let classes3 = [styles.Infobox, styles.Blue].join(" ");

  return (
    <div className={styles.Topbox2} onClick={handleShowPopup}>
      <img src={image} className={styles.Small} alt="Hi" />
      {popup && (
        <div>
          <div className={styles.Overlay}></div>
          <img
            src={image}
            className={popup ? `${styles.Full}` : `${styles.Small}`}
            alt="Hi"
          />
        </div>
      )}
      <p style={{ textAlign: "center" }}>click to enlarge</p>
    </div>
  );
};

export default ImgZoom;
