import { projects } from "../components/Projects";

export const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="top-section">
          <div className="header-top-section-text">
            <h1>Another Indie Web Developer</h1>
            <p>
              {" "}
              I'm Edoardo Giambuzzi. I'm an Indie Web Developer, and I enjoy
              creating apps that increase your productivity and peace of mind.
            </p>
            <div className="header-top-section-text-links">
              <h5>Contact</h5>

              <a href="https://www.linkedin.com/in/edoardo-giambuzzi-45876599/">
                <h5>LinkedIn</h5>
              </a>

              <h5>Blog</h5>
            </div>
          </div>
          <div className="header-top-section-image-container">
            <img
              src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1708695526/portfolio/edo-logo_jdaxxe.png"
              alt="edo-cool-image"
            />
          </div>
        </div>
        <div className="bottom-section">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-header">
                <div className="project-logo-container">
                  <img
                    className="project-logo"
                    src={project.logoUrl}
                    alt="project-logo"
                  />
                </div>
                <h4 className="project-name">{project.name}</h4>
              </div>
              <div className="project-card-video-container">
                <a href={project.link}>
                  <video
                    className="project-video"
                    src={project.videoUrl}
                    alt="video-url"
                    autoPlay
                    loop
                  ></video>
                </a>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
