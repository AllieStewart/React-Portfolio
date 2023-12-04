import githubLogo from '../../../public/GH_icon.svg';

// Name of project, with links to GitHub + deployment page
// through icons, with a image in background.
// card-img needs hover + blurred
export default function CardBody() {
    return (
    <div class="row row-cols-3 row-cols-md-2 g-4">
  <div class="card bg-primary h-100">
  <img src="..." class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Project 1</h5>
    <a href="" img=""></a>
  </div>
</div>
<div class="card bg-primary h-100">
  <img src="/portfolio/project2.png" class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Project 2</h5>
    <a className="deployIMG" href="https://my-queue-proj2-17f6449399b4.herokuapp.com/" img src="/heroku_icon.svg">Click</a>
    <a className="githubIMG" href="https://github.com/Acolyte03/My-Queue">
      <img src={githubLogo}></img>
    </a>
  </div>
</div>
<div class="card bg-primary h-100">
  <img src="..." class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <a href="" img=""></a>
  </div>
</div>
<div class="card bg-primary h-100">
  <img src="..." class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <a href="" img=""></a>
  </div>
</div>
<div class="card bg-primary h-100">
  <img src="..." class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <a href="" img=""></a>
  </div>
</div>
<div class="card bg-primary h-100">
  <img src="..." class="card-img" alt="..."></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <a href="" img=""></a>
  </div>
</div>
</div>
    );
}