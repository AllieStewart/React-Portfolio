import githubLogo from '../../../public/GH_icon.svg';
import deployLogo from '../../../public/portfolio_icons/heroku_icon.svg';
import burgerProj1 from '../../../public/portfolio_icons/project1_burger.svg';
import firstPortfolio from '../../../public/portfolio_icons/firstportfolio.svg';
// Name of project, with links to GitHub + deployment page
// through icons, with a image in background.
// card-img needs hover + blurred
export default function CardBody() {
    return (
    <div class="row row-cols-3 row-cols-md-2 g-4">
      <div class="col">
<div class="card bg-primary h-100">
  <img src="/portfolio/project1.png" class="card-img" height="100%" alt="..."></img>
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
  <img src="/portfolio/project2.png" class="card-img" alt="..."></img>
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
  <img src="/portfolio/firstportfolio.png" class="card-img" height="100%" alt="..."></img>
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
  <img src="/portfolio/project2.png" class="card-img" alt="..."></img>
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
  <img src="/portfolio/project2.png" class="card-img" alt="..."></img>
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
  <img src="/portfolio/project2.png" class="card-img" alt="..."></img>
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
</div>
    );
}