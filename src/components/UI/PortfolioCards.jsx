import githubLogo from '../../../src/assets/portfolio_icons/GH_icon.svg';
import deployLogo from '../../../src/assets/portfolio_icons/heroku_icon.svg';
import burgerProj1 from '../../../src/assets/portfolio_icons/project1_burger.svg';
import firstPortfolio from '../../../src/assets/portfolio_icons/firstportfolio.svg';
import workDaySch from '../../../src/assets/portfolio_icons/wds_icon.svg';
// Name of project, with links to GitHub + deployment page
// through icons, with a image in background.
// card-img needs hover + blurred
export default function CardBody() {
    return (
    <div class="row row-cols-3 row-cols-md-2 g-4">

      <div class="col">
        <div class="card bg-primary h-100">
        <img src="/portfolio/project1.png" class="card-img" height="100%" alt="Tasty Tasty Recipe Finder top site design."></img>
          <div class="card-img-overlay">
          <h5 class="card-title">Project 1</h5>
          <a className="deployIMG" href="https://acolyte03.github.io/Recipe-Finder/">
          <img src={burgerProj1}></img>
          </a>
          <a className="githubIMG" href="https://github.com/Acolyte03/Recipe-Finder">
          <img src={githubLogo}></img>
          </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card bg-primary h-100">
        <img src="/portfolio/project2.png" class="card-img" alt="My Queue watch list home page design."></img>
          <div class="card-img-overlay">
          <h5 class="card-title">Project 2</h5>
          <a className="deployIMG" href="https://my-queue-proj2-17f6449399b4.herokuapp.com/">
          <img src={deployLogo}></img>
          </a>
          <a className="githubIMG" href="https://github.com/Acolyte03/My-Queue">
          <img src={githubLogo}></img>
          </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card bg-primary h-100">
        <img src="/portfolio/firstportfolio.png" class="card-img" height="100%" alt="First portolio, 'Stewart' on top left, navigation on top right, crystal background."></img>
          <div class="card-img-overlay">
          <h5 class="card-title">My First Portfolio</h5>
          <a className="deployIMG" href="https://alliestewart.github.io/Allie-Portfolio/">
          <img src={firstPortfolio}></img>
          </a>
          <a className="githubIMG" href="https://github.com/AllieStewart/Allie-Portfolio">
          <img src={githubLogo}></img>
          </a>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card bg-primary h-100">
        <img src="/portfolio/techblog.png" class="card-img" alt="Tech Blog logo with navigation links."></img>
          <div class="card-img-overlay">
          <h5 class="card-title">Tech Blog</h5>
          <a className="deployIMG" href="https://tech-blog-ajs-baa5a65ab33b.herokuapp.com">
          <img src={deployLogo}></img>
          </a>
          <a className="githubIMG" href="https://github.com/AllieStewart/Tech-Blog">
          <img src={githubLogo}></img>
          </a>
          </div>
        </div>
      </div>

    <div class="col">
      <div class="card bg-primary h-100">
      <img src="/portfolio/notetakerexpress.png" class="card-img" alt="Note Taker Express with pencil and paper icon."></img>
        <div class="card-img-overlay">
        <h5 class="card-title">Note Taker Express</h5>
        <a className="deployIMG" href="https://note-taker-express-ajs-3539f0205c88.herokuapp.com">
        <img src={deployLogo}></img>
        </a>
        <a className="githubIMG" href="https://github.com/AllieStewart/Note-Taker-Express">
        <img src={githubLogo}></img>
        </a>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card bg-primary h-100">
      <img src="/portfolio/workdayscheduler.png" class="card-img" alt="Work Day Scheduler with 9am to 5pm time slots and current time format."></img>
        <div class="card-img-overlay">
        <h5 class="card-title">Work Day Scheduler</h5>
        <a className="deployIMG" href="https://alliestewart.github.io/challenge-5/">
        <img src={workDaySch}></img>
        </a>
        <a className="githubIMG" href="https://github.com/AllieStewart/challenge-5">
        <img src={githubLogo}></img>
        </a>
        </div>
      </div>
    </div>

  </div>
    );
}