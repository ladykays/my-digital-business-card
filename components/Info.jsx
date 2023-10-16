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
      <a href="https://kre8tivedev.co.uk" target="_blank" rel="noreferrer">
        <p className="header--website">kre8tivedev.co.uk</p>
      </a>
      <section className="header--buttons">
        <a href="mailto:ladykerrion@sky.com">
          <button className="email_button">
            <img src={MailIcon} />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
          <button className="linkedin_button">
            <img src={LinkedinIcon} />
            Linkedin
          </button>
        </a>
      </section>
    </header>
  );
}
