import React from "react";
import { projects } from "../components/Projects";

export const Homepage = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:edoardo.giambuzzi@gmail.com";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white font-sans">
      {/* HERO */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-12">
        {/* Left Column */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
            Another Indie Web Developer
          </h1>
          <p className="text-xl mb-6 max-w-2xl leading-relaxed text-gray-300">
            I'm <strong className="text-white">Edoardo Giambuzzi</strong>, based
            in Berlin. I craft web experiences that elevate productivity and
            serenity.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <button
              onClick={handleContactClick}
              className="bg-white text-black text-lg font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition"
            >
              Contact
            </button>
            <a
              href="https://www.linkedin.com/in/edoardo-giambuzzi-45876599/"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>
            <a
              href="#blog"
              className="text-lg font-semibold px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Blog
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1708695526/portfolio/edo-logo_jdaxxe.png"
            alt="Edoardo Giambuzzi"
            className="rounded-full shadow-2xl w-60 h-60 object-cover border-4 border-white"
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-12 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-[22rem] flex flex-col gap-6 p-6 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10 hover:scale-[1.02] transition-transform"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={project.logoUrl}
                    alt={`${project.name} logo`}
                    className="h-10 w-10 object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>

              {/* Video */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden border border-white/20"
              >
                <video
                  src={project.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-52 w-full object-cover"
                />
              </a>

              {/* Description */}
              <p className="text-md text-gray-200">{project.description}</p>

              {/* Languages */}
              <div className="flex gap-3 flex-wrap items-center">
                {project.languages.map((languageUrl, idx) => (
                  <img
                    key={idx}
                    src={languageUrl}
                    alt="language"
                    className="h-7 w-7 object-contain"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
