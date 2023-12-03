// This is a static page mocking an "About Me" section
export default function AboutPage() {
    return (
      <div className="container pt-4">
        <h3>About Me</h3>
          <img className="about-img" src="../../public/about/about.jpg" alt=""/>
        <p className="about-p">
          My name is Allie Stewart.
          I was born and raised in Texas.
          My interests include drawing, video games, videography,
          and programming.
        </p>
      </div>
    );
  }