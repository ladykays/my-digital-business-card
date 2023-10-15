import MailIcon from "../src/assets/images/mail.png";
import LinkedinIcon from "../src/assets/images/linkedin.png";

export default function Info() {
  return (
    <header>
      <img
        src="../src/assets/images/profile-pic.jpeg"
        alt="Ndidi"
        className="header--photo"
      />
      <h1 className="header--name">Ndidiamaka Siokwu</h1>
      <p className="header--role">Frontend Web Developer</p>
      <p className="header--website">kre8tive.co.uk</p>
      <section className="header--buttons">
        <button className="email_button">
          <img src={MailIcon} />
          Email
        </button>
        <button className="linkedin_button">
          <img src={LinkedinIcon} />
          Linkedin
        </button>
      </section>
    </header>
  );
}
