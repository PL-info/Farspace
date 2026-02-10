import { ABOUT_CONTENT } from "../constants";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        About Our Web Services
      </h2>
      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className="mb-8 lg:mb-0">
          {/* Use the path from constants directly */}
          <img 
            src={ABOUT_CONTENT.image} 
            alt="Web Services" 
            className="w-full h-auto rounded-3xl" 
          />
        </div>
        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
          {ABOUT_CONTENT.text}
        </p>
      </div>
    </section>
  );
};

export default About;