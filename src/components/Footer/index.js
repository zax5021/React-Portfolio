import profilePic from "../../assets/images/profilePic.png";

function Footer() {
  return (
    <footer>
      <nav id="Contact">
        <ul>
          <li>
            <img
              id="profilePic"
              src={profilePic}
              alt="Zack Campbell Profile Pic"
            />
          </li>
          <li>
            <a href="#">858.775.4873</a>
          </li>
          <li>
            <a href="mailto:zacharyacampbell1@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://github.com/zax5021/">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zack-campbell-0631187b/">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
