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
import { useLanguage } from "../components/language-provider";
import landingPageText from "../constants/landing-page-text.json";

function Landing() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="py-3 px-32 flex-col justify-between font-roboto">
      <AppBar
        logo={<Logo />}
        nav={
          <InpageNav
            links={[
              {
                href: "#about",
                text: `${
                  language === "EN"
                    ? landingPageText.navlinks.en[0]
                    : landingPageText.navlinks.gr[0]
                }`,
              },
              {
                href: "#how-it-works",
                text: `${
                  language === "EN"
                    ? landingPageText.navlinks.en[1]
                    : landingPageText.navlinks.gr[1]
                }`,
              },
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
            {language === "EN"
              ? landingPageText["action-btn"].en
              : landingPageText["action-btn"].gr}
          </Button>
        }
      />
      <main className="my-32 flex flex-col justify-between space-y-24 font-roboto">
        <section id="about" className="scroll-smooth scroll-mt-32">
          <H1 className="mb-16 text-center">
            {language === "EN"
              ? landingPageText["title-1"].en
              : landingPageText["title-1"].gr}
          </H1>
          <div id="about-content" className="ml-60 space-y-8 font-robotoSlab">
            <div id="about-1">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-3">
                  {language === "EN"
                    ? landingPageText["about-1"].h4.en
                    : landingPageText["about-1"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-1 col-span-3">
                  {language === "EN"
                    ? landingPageText["about-1"].p.en
                    : landingPageText["about-1"].p.gr}
                </P>
              </div>
            </div>
            <div id="about-2" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-2">
                  {language === "EN"
                    ? landingPageText["about-2"].h4.en
                    : landingPageText["about-2"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-3 space-y-8">
                <P className="col-start-2 col-span-3 row-span-1">
                  {language === "EN"
                    ? landingPageText["about-2"].p.en
                    : landingPageText["about-2"].p.gr}
                </P>
                <div className="col-start-1 col-span-3 row-span-2 text-left">
                  <H4>
                    {language === "EN"
                      ? landingPageText["about-2-2"].h4.en
                      : landingPageText["about-2-2"].h4.gr}
                  </H4>
                  <P>
                    {language === "GR" ? "Το " : ""}{" "}
                    <strong>Psychophysics Connect</strong> {language === "EN"
                      ? landingPageText["about-2-2"].p.en
                      : landingPageText["about-2-2"].p.gr}
                  </P>
                  <BulletList>
                    <li>
                      <u>
                        {language === "EN"
                          ? landingPageText["about-2-2"].li1.role.en
                          : landingPageText["about-2-2"].li1.role.gr}
                      </u>
                      : {language === "EN"
                        ? landingPageText["about-2-2"].li1.text.en
                        : landingPageText["about-2-2"].li1.text.gr}
                    </li>
                    <li>
                      <u>
                        {language === "EN"
                          ? landingPageText["about-2-2"].li2.role.en
                          : landingPageText["about-2-2"].li2.role.gr}
                      </u>
                      : {language === "EN"
                        ? landingPageText["about-2-2"].li2.text.en
                        : landingPageText["about-2-2"].li2.text.gr}
                    </li>
                  </BulletList>
                </div>
                <SharedGoalsSVG className="col-start-5 col-span-2 row-start-1 row-span-3 w-fit" />
              </div>
            </div>
            <div id="about-3" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-2">
                  {language === "EN"
                    ? landingPageText["about-3"].h4.en
                    : landingPageText["about-3"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-2 col-span-3">
                  {language === "EN"
                    ? landingPageText["about-3"].p.en
                    : landingPageText["about-3"].p.gr}
                </P>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-smooth scroll-mt-32">
          <H1 className="mb-16 text-center">
            {language === "EN"
              ? landingPageText["title-2"].en
              : landingPageText["title-2"].gr}
          </H1>
          <div
            id="how-it-works-content"
            className="ml-60 space-y-8 font-robotoSlab"
          >
            <div id="how-it-works-1">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-3 col-span-3 text-right">
                  {language === "EN"
                    ? landingPageText["how-it-works-1"].h4.en
                    : landingPageText["how-it-works-1"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 row-span-1">
                <P className="col-start-3 col-span-3 text-right">
                  {language === "EN"
                    ? landingPageText["how-it-works-1"].p.en
                    : landingPageText["how-it-works-1"].p.gr}
                </P>
              </div>
            </div>
            <div id="how-it-works-2" className="text-left">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-2">
                  {language === "EN"
                    ? landingPageText["how-it-works-2"].h4.en
                    : landingPageText["how-it-works-2"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-3 ">
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-2"].p1.en
                      : landingPageText["how-it-works-2"].p1.gr}
                  </P>
                  <BulletList>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-1"].li1
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-1"].li1
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-1"].li2
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-1"].li2
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-2"].p2.en
                      : landingPageText["how-it-works-2"].p2.gr}
                  </P>
                  <BulletList>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-2"].li1
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-2"].li1
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-2"].li2
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-2"].li2
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-1 col-span-4 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-2"].p3.en
                      : landingPageText["how-it-works-2"].p3.gr}
                  </P>
                  <BulletList>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-3"].li1
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-3"].li1
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-3"].li2
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-3"].li2
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-2"]["bullet-list-3"].li3
                          .en
                        : landingPageText["how-it-works-2"]["bullet-list-3"].li3
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <OnboardingSVG className="col-start-5 col-span-2 row-start-1 row-span-3 w-fit" />
              </div>
            </div>
            <div id="how-it-works-3" className="text-right">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-4 col-span-2">
                  {language === "EN"
                    ? landingPageText["how-it-works-3"].h4.en
                    : landingPageText["how-it-works-3"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-4 ">
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-3"].p1.en
                      : landingPageText["how-it-works-3"].p1.gr}
                  </P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-1"].li1
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-1"].li1
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-3"].p2.en
                      : landingPageText["how-it-works-3"].p2.gr}
                  </P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-2"].li1
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-2"].li1
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-2"].li2
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-2"].li2
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-3"].p3.en
                      : landingPageText["how-it-works-3"].p3.gr}
                  </P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-3"].li1
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-3"].li1
                          .gr}
                    </li>
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-3"].li2
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-3"].li2
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <div className="col-start-3 col-span-3 row-span-1">
                  <P>
                    {language === "EN"
                      ? landingPageText["how-it-works-3"].p4.en
                      : landingPageText["how-it-works-3"].p4.gr}
                  </P>
                  <BulletList className="flex flex-col justify-end items-end">
                    <li>
                      {language === "EN"
                        ? landingPageText["how-it-works-3"]["bullet-list-4"].li1
                          .en
                        : landingPageText["how-it-works-3"]["bullet-list-4"].li1
                          .gr}
                    </li>
                  </BulletList>
                </div>
                <ScientistSVG className="col-start-1 col-span-2 row-start-1 row-span-4 w-fit" />
              </div>
            </div>
            <div id="how-it-works-4" className="text-left space-y-4">
              <div className="grid grid-cols-6 row-span-1">
                <H4 className="col-start-1 col-span-2">
                  {language === "EN"
                    ? landingPageText["how-it-works-4"].h4.en
                    : landingPageText["how-it-works-4"].h4.gr}
                </H4>
              </div>

              <div className="grid grid-cols-6 grid-rows-1">
                <P className="col-span-3">
                  {language === "EN"
                    ? landingPageText["how-it-works-4"].p.en
                    : landingPageText["how-it-works-4"].p.gr}
                </P>
              </div>
              <div className="grid grid-cols-6 row-span-1 text-right">
                <H4 className="col-start-4 col-span-2">
                  {language === "EN"
                    ? landingPageText["how-it-works-4-2"].h4.en
                    : landingPageText["how-it-works-4-2"].h4.gr}
                </H4>
              </div>
              <div className="grid grid-cols-6 grid-rows-2 text-right">
                <P className="col-start-3 col-span-3">
                  {language === "EN"
                    ? landingPageText["how-it-works-4-2"].p.en
                    : landingPageText["how-it-works-4-2"].p.gr}
                </P>
                <Button
                  variant="success"
                  size="xl"
                  className="col-start-5 row-start-2 my-8"
                >
                  {language === "EN"
                    ? landingPageText["action-btn"].en
                    : landingPageText["action-btn"].gr}
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
