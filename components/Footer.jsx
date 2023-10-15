import TwitterIcon from "../src/assets/images/twitter_icon.png";
import GithubIcon from "../src/assets/images/github_icon.png";
import FacebookIcon from "../src/assets/images/facebook_icon.png";
import InstagramIcon from "../src/assets/images/instagram_icon.png"; 
export default function Footer() {
  return (
    <footer className="footer_section">
      <ul className="socials">
        <li><img src={TwitterIcon} /></li>
        <li><img src={FacebookIcon} /></li>
        <li><img src={InstagramIcon} /></li>
        <li><img src={GithubIcon} /></li>
      </ul>
    </footer>
  )
}