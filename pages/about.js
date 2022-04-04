import Sidebar from "../components/global/Sidebar";
import styles from "../styles/Pages.module.css";
function About() {
  return (
    <div className={styles.page}>
      <Sidebar></Sidebar>
      <div style={{ color: "gray", padding: "10px" }}>
        This app allows a user to view images of art and it&apos;s description
        including price, as posted by a designer. A user can create an account
        as a buyer or a designer . A buyer account allows, adding items to cart
        and purchasing them after choosing a pickup point. A designer account
        has an additional feature that allows them to upload images of their art
        with a description and a price. The total amount of money payable is
        inclusive of the service fee and is paid through lipa na mpesa.
      </div>
    </div>
  );
}
export default About;
