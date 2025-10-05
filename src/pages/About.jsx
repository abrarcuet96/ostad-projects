import { useEffect } from "react";
import ExperienceCard from "../components/ExperienceCard";
import MasterLayout from "../layout/MasterLayout";
import experienceStore from "../store/experience.store";

const About = () => {
  const { allExperience, allExperienceRequest } = experienceStore();

  useEffect(() => {
    allExperienceRequest();
  }, [allExperienceRequest]);

  console.log(allExperience);
  return (
    <MasterLayout>
      <div className="max-w-screen-xl mx-auto my-10">
        <div>
          <a
            href="assets/my-cv.pdf"
            className="px-2 py-1 bg-pink-600 hover:bg-pink-800 rounded-md text-white"
          >
            Download CV
          </a>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl font-bold my-5">My Experiences</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {allExperience?.map((experience) => (
              <ExperienceCard experience={experience} />
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold my-5">
              Educational Qualifications
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {allExperience?.map((experience) => (
              <ExperienceCard experience={experience} />
            ))}
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold my-5">My Advantages</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {allExperience?.map((experience) => (
              <ExperienceCard experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default About;
