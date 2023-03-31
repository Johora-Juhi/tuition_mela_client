import React from "react";
import CountUp from "react-countup";
import books from "../../../assets/books.png";
import teacher from "../../../assets/teacher.png";
import people from "../../../assets/people.png";
import essential from "../../../assets/essential.png";

const Growing = () => {
  return (
    <div className="container py-20 text-center mx-auto">
      <p className="text-4xl font-bold text-sky-900 pb-2">
        We Just Keep Growing
      </p>
      <p className="text-stone-400">
        Explore all of our courses and pick your suitable ones to enroll and
        start learning with us!
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mx-20 lg:mx-40 mt-20">
        <div className="flex gap-8 items-center">
          <div className="w-[90px]">
            <img src={books} alt="" />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-5/6 text-right">
                <CountUp
                  className="text-4xl font-bold text-sky-900"
                  delay={5000}
                  end={7500}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />
              </div>
              <div className="text-3xl w-2/4 text-accent">+</div>
            </div>
            <p className="text-gray-300 text-start font-bold text-xl">Tuitions</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="w-[90px]">
            <img src={teacher} alt="" />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-5/6 text-right">
                <CountUp
                  className="text-4xl font-bold text-sky-900"
                  delay={5000}
                  end={1500}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />
              </div>
              <div className="text-3xl w-2/4 text-accent">+</div>
            </div>
            <p className="text-gray-300 text-start font-bold text-xl">Instructors</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="w-[90px]">
            <img src={people} alt="" />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-5/6 text-right">
                <CountUp
                  className="text-4xl font-bold text-sky-900"
                  delay={5000}
                  end={6500}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />
              </div>
              <div className="text-3xl w-2/4 text-accent">+</div>
            </div>
            <p className="text-gray-300 text-start font-bold text-xl">Students</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="w-[90px]">
            <img src={essential} alt="" />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="w-5/6 text-right">
                <CountUp
                  className="text-4xl font-bold text-sky-900"
                  delay={5000}
                  end={100}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                />
              </div>
              <div className="text-3xl w-1/4 text-accent">%</div>
            </div>
            <p className="text-gray-300 text-start font-bold text-xl">Satisfaction rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growing;
