import Sidebar from "../components/global/Sidebar";
import styles from "../styles/Pages.module.css";
function Privacy() {
  return (
    <div className={styles.page}>
      <Sidebar></Sidebar>
      <div style={{ color: "gray", padding: "10px" }}>
        We are committed to protecting your privacy and safeguarding your
        personal information. The purpose of this privacy policy is to inform
        you about our privacy practices, including how we collect and use your
        personal information. By using ArtGallery services, you consent to the
        policies of this privacy policy. Personal Information We Collect. The
        personal information we collect about you includes your phone number,
        email address first name and last name. We use this information to
        uniquely identify visitor&apos;s information. We take steps designed to
        ensure that only the people who need access to your personal information
        to fulfil their employment duties e.g delivery, will have access to it.
        Information Security We take your privacy very seriously and have
        implemented physical and technological security measures in order to
        protect your personal information from loss, theft or unauthorized
        access. Retention of Personal Information We will use your personal
        information only for as long as necessary to fulfill the purposes for
        which that personal information was collected. Contact Us For any
        questions or comments about this privacy policy or your personal
        information,  contact us on- +254112100378
      </div>
    </div>
  );
}
export default Privacy;
