import AppBar from "../components/AppBar";
import InpageNav from "../components/InpageNav";
import Logo from "../components/Logo/Logo";
import ThemeSwitch from "../components/ThemeSwitch";
import { Button } from "../components/ui/Button";
import LangSelect from "../components/LangSelect";
import H1 from "../components/typography/H1";
import H4 from "../components/typography/H4";
import P from "../components/typography/P";

import { ReactComponent as SharedGoalsSVG } from "../assets/undraw_shared_goals_re_jvqd.svg";
import { ReactComponent as OnboardingSVG } from "../assets/undraw_onboarding_re_6osc.svg";
import { ReactComponent as ScientistSVG } from "../assets/undraw_scientist_ft0o(1).svg";
import BulletList from "../components/typography/BulletList";

function Landing() {
  return (
    <div className="py-3 px-32 flex-col justify-between font-roboto">
      <AppBar
        logo={<Logo />}
        nav={
          <InpageNav
            links={[
              { href: "#about", text: "About" },
              { href: "#how-it-works", text: "How it works" },
            ]}
          />
        }
        settings={
          <>
            <div>
              <LangSelect />
            </div>
            <ThemeSwitch />
          </>
        }
        actionButton={
          <Button
            variant="outline"
            className="text-base text-success border-2 border-success hover:bg-success hover:text-success-foreground"
          >
            GET STARTED
          </Button>
        }
      />
      <main className="my-32 flex flex-col justify-between space-y-24 font-roboto">
        <section id="about" className="scroll-smooth scroll-mt-32">
          <H1 className="mb-16 text-center">About Psychophysics Connect</H1>
          <div id="about-content" className="ml-60 space-y-8 font-robotoSlab">
            <div id="about-1">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-3">
                  Empowering Collaboration in Psycho-physical Research
                </H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-1 col-span-3">
                  The Psychophysics Connect project seeks to facilitate
                  psycho-physical research by bridging the gap between
                  researchers and participants. Our innovative web platform is
                  designed to make psycho-physics experiments accessible to
                  researchers and engaging for participants, no matter where
                  they are.
                </P>
              </div>
            </div>
            <div id="about-2" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-2">Our Motivation</H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-3 space-y-8">
                <P className="col-start-2 col-span-3 row-span-1">
                  The world of psycho-physical research is constantly evolving,
                  and we believe that innovation should be at its core. We’ve
                  seen the challenges researchers face when conducting
                  experiments - from recruiting participants to managing complex
                  sessions. That’s why we’ve created Psychophysics Connect, a
                  platform that simplifies and streamlines the research process.
                </P>
                <div className="col-start-1 col-span-3 row-span-2 text-left">
                  <H4>Who we serve</H4>
                  <P>
                    <strong>Psychophysics Connect</strong>{" "}
                    is for two key user groups:
                  </P>
                  <BulletList>
                    <li>
                      <u>Subjects</u>: Individuals who want to contribute to
                      scientific research. They can easily participate in
                      experiments, providing valuable data to researchers.
                    </li>
                    <li>
                      <u>Experimenters</u>: Researchers and scientists who
                      conduct psycho-physics experiments. They can design,
                      manage and analyze experiments efficiently.
                    </li>
                  </BulletList>
                </div>
                <SharedGoalsSVG className="col-start-5 col-span-2 row-start-1 row-span-3 w-fit" />
              </div>
            </div>
            <div id="about-3" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-2">Our Vision</H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-2 col-span-3">
                  Our vision is to empower collaboration between researchers and
                  participants. By providing an intuitive platform, we enable
                  researchers to focus on their studies while offering
                  participants the opportunity to engage in meaningful research.
                </P>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-smooth scroll-mt-32">
          <H1 className="mb-16 text-center">How Psychophysics Connect works</H1>
          <div
            id="how-it-works-content"
            className="ml-60 space-y-8 font-robotoSlab"
          >
            <div id="how-it-works-1">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-3 text-right">
                  Seamless Collaboration, Powerful Research
                </H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-3 col-span-3 text-right">
                  The <strong>Psychophysics Connect</strong>{" "}
                  platform simplifies the process of designing and conducting
                  psycho-physics experiments. Here’s how it works:{" "}
                </P>
              </div>
            </div>
            <div id="how-it-works-2" className="text-left">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-2">For Subjects:</H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-3 ">
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>Explore Available Experiments</P>
                  <BulletList>
                    <li>
                      Visit the homepage to discover a list of active
                      experiments.
                    </li>
                    <li>
                      Choose an experiment that interests you and start your
                      journey as a participant.
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>Manage Your Sessions</P>
                  <BulletList>
                    <li>
                      Access a dashboard where you can view all your experiment
                      sessions
                    </li>
                    <li>
                      Resume incomplete sessions you’ve previously paused, or
                      start new ones for sessions you have already completed.
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>Engage in Experiments</P>
                  <BulletList>
                    <li>
                      Enter the experiment session, where you’ll be presented
                      with various stimuli.
                    </li>
                    <li>Participate actively, providing valuable responses.</li>
                    <li>
                      If you need to pause, you can exit and return later to
                      continue where you left off.
                    </li>
                  </BulletList>
                </div>
                <OnboardingSVG className="col-start-5 col-span-2 row-start-1 row-span-3 w-fit" />
              </div>
            </div>
            <div id="how-it-works-3" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-4 col-span-2">For Experimenters:</H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-4 ">
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>Navigate Your Dashboard</P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      Access your dedicated dashboard, where you can manage your
                      experiments
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>Create new experiments</P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>Start crafting a new experiment.</li>
                    <li>
                      Set the title, description, add stimuli, perceptual
                      dimensions and more, to design unique experiments.
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>Manage Experiments</P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      Easily edit or delete existing experiments as needed.
                    </li>
                    <li>Keep track of responses and data from participants</li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>Enhance Your Resources</P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>Upload media assets to enrich your experiments.</li>
                  </BulletList>
                </div>
                <ScientistSVG className="col-start-1 col-span-2 row-start-1 row-span-4 w-fit" />
              </div>
            </div>
            <div id="how-it-works-4" className="text-left space-y-4">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-2">
                  Collaborative Research Made Easy
                </H4>
              </div>

              <div className="grid grid-cols-6 grid-rows-1">
                <P className="col-span-3">
                  <strong>Psychophysics Connect</strong>{" "}
                  is designed to simplify the research process, enabling
                  seamless collaboration between researchers and participants.
                  Whether you’re an experimenter seeking insights or a subject
                  eager to contribute, our platform empowers you to be part of
                  groundbreaking research.
                </P>
              </div>
              <div className="grid grid-cols-6 row-span-1 text-right">
                <H4 className="col-start-4 col-span-2">
                  Ready to Get Started?
                </H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-2 text-right">
                <P className="col-start-3 col-span-3">
                  <strong>Psychophysics Connect</strong>{" "}
                  is designed to simplify the research process, enabling
                  seamless collaboration between researchers and participants.
                  Whether you’re an experimenter seeking insights or a subject
                  eager to contribute, our platform empowers you to be part of
                  groundbreaking research.
                </P>
                <Button
                  variant="success"
                  size="xl"
                  className="col-start-5 row-start-2 my-8"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
