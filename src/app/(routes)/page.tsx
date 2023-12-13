import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SocialCard } from "../_common/components";
import Image from "next/image";

const SOCIALS = {
  github: "https://github.com/nhanluongoe",
  linkedin: "https://www.linkedin.com/in/nhanlt18/",
};

// const INTRO =
//   "Hi, I'm a Front-End Software Engineer. Interested in building applications, design systems, and open-source projects.";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      {/* <p className="text-zinc-600 mb-5 text-start">{INTRO}</p> */}

      <section className="mb-5 flex">
        <div className="flex flex-col justify-center flex-1">
          <p className="text-2xl">Build things from small.</p>
          <button className="button-primary w-[200px] my-5">Read blogs</button>
        </div>
        <div className="flex-1">
          <Image src="" alt="hero image" width="300" height="300"></Image>
        </div>
      </section>

      <section className="w-full">
        <div className="flex gap-x-5">
          <SocialCard
            title="Github"
            desc="nhanluongoe"
            icon={<FaGithub size="3em" />}
            href={SOCIALS.github}
          />
          <SocialCard
            title="Linkedin"
            desc="nhanlt18"
            icon={<FaLinkedin size="3em" />}
            href={SOCIALS.linkedin}
          />
        </div>
      </section>
    </div>
  );
}
