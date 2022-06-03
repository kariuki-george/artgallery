import Sidebar from "../components/global/Sidebar";
import styles from "../styles/Pages.module.css";
function Help() {
  return (
    <div className={styles.page}>
      <Sidebar></Sidebar>
      <div style={{ color: "gray", padding: "10px" }}>
        For any assistance, call -
        +254112100378
      </div>
    </div>
  );
}
export default Help;
