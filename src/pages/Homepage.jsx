import React from "react";
import { projects } from "../components/Projects";

export const Homepage = () => {
  const handleContactClick = () => {
    const recipientEmail = "edoardo.giambuzzi@gmail.com";
    const mailToLink = `mailto:${recipientEmail}`;
    window.location.href = mailToLink;
  };

  return (
    <>
      <div className="h-100 bg-fuchsia-200 p-4">
        <div className="flex p-8 justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-lg flex gap-3 overflow-hidden border border-black mt-4 items-center">
              <div className="flex flex-col w-2/3 gap-10 h-full items-center">
                <h1 className="text-2xl text-black font-bold mt-2">
                  Another Indie Web Developer
                </h1>
                <p className="text-xl p-2 text-center">
                  {" "}
                  I'm Edoardo Giambuzzi. I live in Berlin, and I enjoy creating
                  apps that increase your productivity and peace of mind.
                </p>
                <div className="flex gap-2">
                  <h5
                    className="text-3xl font-bold ml-2 mb-2 cursor-pointer hover:text-blue-500 transition duration-300"
                    onClick={handleContactClick}
                  >
                    Contact
                  </h5>
                  <a href="https://www.linkedin.com/in/edoardo-giambuzzi-45876599/">
                    <h5 className="text-3xl font-bold ml-2 mb-2 cursor-pointer hover:text-blue-500 transition duration-300">
                      LinkedIn
                    </h5>
                  </a>
                  <h5 className="text-3xl font-bold ml-2 mb-2 cursor-pointer hover:text-blue-500 transition duration-300">
                    Blog
                  </h5>
                </div>
              </div>
              <div className="flex w-1/3 items-center justify-center">
                <img
                  className="h-52 w-52 object-cover rounded-full"
                  src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1708695526/portfolio/edo-logo_jdaxxe.png"
                  alt="edo-cool-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-1 justify-center items-center h-1/2 gap-3">
          {projects.map((project, index) => (
            <div
              className="flex flex-col justify-evenly items-center border border-black rounded-3xl gap-4 h-full max-w-96 p-8"
              key={index}
            >
              <div className="flex items-center gap-3">
                <div className="bg-black flex justify-center items-center h-fit rounded-full overflow-hidden">
                  <img
                    className="h-12 w-12"
                    src={project.logoUrl}
                    alt="project-logo"
                  />
                </div>
                <h4 className="project-name">{project.name}</h4>
              </div>
              <div className="flex justify-center items-center overflow-hidden bg-transparent ml-2 mr-2 rounded-3xl border border-black hover:scale-105 transition duration-300">
                <a href={project.link}>
                  <video
                    className="autoplay loop h-52 w-96 object-cover rounded-3xl"
                    src={project.videoUrl}
                    alt="video-url"
                    autoPlay
                    loop
                  ></video>
                </a>
              </div>
              <p className="text-lg mx-auto justify-center">
                {project.description}
              </p>
              <div className="languages">
                <div className="flex gap-2 items-center">
                  {project.languages.map((languageUrl, index) => (
                    <img
                      className="h-8 w-full"
                      key={index}
                      src={languageUrl}
                      alt="language-logo"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
