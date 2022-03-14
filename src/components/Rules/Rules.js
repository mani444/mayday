import Label from "./Label/Label";
import Checkbox from "./Checkbox/Checkbox";
import styles from "./Rules.module.scss";

const Rules = (props) => {
  return props.rules.map((rule, index) => {
    return (
      <div className={styles.Rules} key={index}>
        <Checkbox
          handleClick={() => props.handleClick(index)}
          ischecked={rule.isChecked}
        />
        <Label text={rule.rule} />
        <br />
        <br />
      </div>
    );
  });
};

export default Rules;
