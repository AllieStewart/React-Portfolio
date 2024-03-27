// Start of JSX file
// Footer that displays my GitHub and LinkedIn links.
import githubLogo from '../../../src/assets/portfolio_icons/GH_icon.svg';
import linkedInLogo from '../../../src/assets/portfolio_icons/LI_icon.png';

export default function Footer() {
    return (
    <footer>
        <div class="footer"><center className="footerIcons">
            <a href="https://github.com/AllieStewart">
            <img src={githubLogo} className="gitHubIcon" />
            </a>
            <a href="https://www.linkedin.com/in/allie-j-stewart/">
            <img src={linkedInLogo} height="96px"className="linkedInIcon" />
            </a>
        </center>
        </div>
    </footer>
    );
}
// Links to GitHub, LinkedIn, and misc social media profile
// End of JSX file