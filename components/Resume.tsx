import { education } from "@/data";
import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";

const Resume = () => {
  return (
    <section className="pt-6">
      <h1 className="heading my-8">
        <span className="text-purple">Education</span>
      </h1>
      <div className="flex max-md:flex-col gap-2 pt-10 justify-between">
        <Timeline
          data={[
            {
              title: "",
              content: (
                <div className="">
                  {education.map(({ id, degree, year, college, score }) => (
                    <div key={id} className="flex flex-col gap-4">
                      <p className="font-bold text-2xl">{degree}</p>
                      <p className="text-gray-500 font-bold">{year}</p>
                      <p className="font-bold text-md">{college}</p>
                      <p className="font-bold text-purple">{score}</p>
                    </div>
                  ))}
                </div>
              ),
            },
          ]}
        />
        <Timeline
          data={[
            {
              title: "",
              content: (
                <div className="">
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-2xl">Intermediate</p>
                    <p className="text-gray-500 font-bold">2015</p>
                    <p className="font-bold text-md">H/S Devapur, Gopalganj</p>
                    <p className="font-bold text-purple">62%</p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
