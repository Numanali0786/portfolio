import { skills } from "@/data";
import React from "react";

const Skills = () => {
  return (
    <section>
      <h1 className="heading">
        My <span className="text-purple">Skills</span>
      </h1>
      <div className="flex gap-8 md:gap-32 my-8">
        <div className="flex-1 flex flex-col gap-6">
          {skills.slice(0, 2).map((skill) => (
            <div
              key={skill.id}
              className="
              flex items-center justify-between flex-1 border-b-2 
            border-gray-700 tracking-normal"
            >
              <p className="text-purple">{skill.title}</p>
              <p>{skill.rate}</p>
            </div>
          ))}
        </div>
        <div className="flex-1  flex flex-col gap-6">
          {skills.slice(2).map((skill) => (
            <div
              key={skill.id}
              className="flex items-center justify-between flex-1 border-b-2 
            border-gray-700 tracking-normal"
            >
              <p className="text-purple">{skill.title}</p>
              <p>{skill.rate}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
