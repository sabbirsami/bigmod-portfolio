"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import teamImage from "@/assets/bg/abouut-bg.jpg";
import mission from "@/assets/mission.svg";
import progress90image from "@/assets/progress90.png";
import progress85image from "@/assets/progress85.png";
import Arrow from "../shared/icons/Arrow";
import Link from "next/link";
import counterBg from "@/assets/bg/counter-bg.png";

const About: React.FC = () => {
  // Define state types
  const [projectsCompleted, setProjectsCompleted] = useState<number>(0);
  const [satisfiedClients, setSatisfiedClients] = useState<number>(0);
  const [expertTeams, setExpertTeams] = useState<number>(0);
  const [peopleUsing, setPeopleUsing] = useState<number>(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Counter animation function
  const animateCounters = () => {
    animateCount(5, setProjectsCompleted);
    animateCount(3, setSatisfiedClients);
    animateCount(10, setExpertTeams);
    animateCount(28, setPeopleUsing);
  };

  const animateCount = (
    target: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let count = 0;
    const increment = Math.ceil(target / 50);
    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        setState(target);
        clearInterval(interval);
      } else {
        setState(count);
      }
    }, 50);
  };

  return (
    <section className="py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h3 className=" uppercase mb-2">About Us</h3>
            <div className="w-10 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
            <h2 className="text-5xl font-bold mb-10">
              Direction With Our Company.
            </h2>
            <p className="text-gray-300 mb-6">
              BigMod Technologies is a dynamic and innovative company...
            </p>
            <div className="flex items-center gap-6 my-10">
              <div className="border border-secondary_one/35 rounded-full p-6">
                <Image className="w-32" src={mission} alt="Team Image"></Image>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-1">Our Mission</h4>
                <div className="w-20 h-[2px] bg-gradient-to-tr from-secondary_one to-primary_two rounded-full mb-5"></div>
                <p className="text-gray-300">
                  We are committed to delivering innovative solutions...
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="bg-gradient-to-tr from-secondary_one to-secondary_two text-white px-8 py-3 rounded-full inline-block mt-4"
            >
              <div className="flex items-center justify-center gap-4">
                <span>About More</span> <Arrow width={13} height={13} />
              </div>
            </Link>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src={teamImage}
              alt="Team Photo"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute bottom-0 -left-48 bg-white py-4 px-8 shadow-lg rounded-lg flex space-x-8 transform translate-x-1/2 translate-y-1/2">
              <div className="text-center flex items-center justify-between gap-4">
                <Image
                  className="w-16"
                  src={progress90image}
                  alt="Progress 90%"
                  height={300}
                  width={300}
                />
                <p className="text-sm text-gray-600">Web Clean Design</p>
              </div>
              <div className="text-center flex items-center justify-between gap-4">
                <Image
                  className="w-16"
                  src={progress85image}
                  alt="Progress 85%"
                  height={300}
                  width={300}
                />
                <p className="text-sm text-gray-600">App Developing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          ref={sectionRef}
          className="mt-16 bg-[#160044] text-white rounded-lg py-16 px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative features-count"
          style={{
            background: `url(${counterBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <div>
            <p className="text-5xl font-bold text-primary_two">
              {projectsCompleted}+
            </p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary_two">
              {satisfiedClients}+
            </p>
            <p>Satisfied Clients</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary_two">
              {expertTeams}+
            </p>
            <p>Expert Teams</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary_two">
              {peopleUsing}+
            </p>
            <p>People Are Using</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
