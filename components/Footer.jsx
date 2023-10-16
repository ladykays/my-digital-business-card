import TwitterIcon from "../src/assets/images/twitter_icon.png";
import GithubIcon from "../src/assets/images/github_icon.png";
import FacebookIcon from "../src/assets/images/facebook_icon.png";
import InstagramIcon from "../src/assets/images/instagram_icon.png"; 
export default function Footer() {
  return (
    <footer className="footer_section">
      <ul className="socials">
        <a href="#">
          <li>
            <img src={TwitterIcon} />
          </li>
        </a>
        <a href="#">
          <li>
            <img src={FacebookIcon} />
          </li>
        </a>
        <a href="#">
          <li>
            <img src={InstagramIcon} />
          </li>
        </a>
        <a href="https://github.com/ladykays" target="_blank" rel="noreferrer">
          <li>
            <img src={GithubIcon} />
          </li>
        </a>
      </ul>
    </footer>
  )
}