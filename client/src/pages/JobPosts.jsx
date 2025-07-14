import JobCard from "../components/JobCard";
import Nav from "../components/Nav";
import Slack from "../assets/slack.png";
import WN from "../assets/wnblack.png";
import Microsoft from "../assets/Microsoft.png";
import Marquee from "react-fast-marquee";

const JobPosts = () => {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto px-4">
          <div className="flex justify-center items-center mt-24 flex-col">
            <div className="flex flex-col gap-10">
              <h1 className="text-5xl font-semibold text-center">
                Get The Right Job <br /> You Deserve
              </h1>
              <p className="text-center text-sm text-gray-500">
                1,80,570 jobs listed here! Your dream job is waiting
              </p>
            </div>

            <div className="mt-24 flex flex-row">
              <Marquee pauseOnHover speed={50} gradient={false}>
                <JobCard
                  bgColor="bg-green-100"
                  jobTitle="Senior UI Designer"
                  company="Slack"
                  companyLogo={Slack}
                  location="Glendale, CA"
                  type="Full-time"
                  salary={20}
                  description="Take advantage of a rare opportunity to start from the ground up and build..."
                  isVerified={true}
                  onApply={() => alert("Applying to Microsoft")}
                />

                <JobCard
                  className="bg-yellow-100"
                  jobTitle="Frontend Developer"
                  company="Who's Next?"
                  companyLogo={WN} // Replace with your actual image import
                  location="Mountain View, CA"
                  type="Remote"
                  salary={18}
                  description="Join our mission to make information universally accessible and useful through clean UI and modern frontend technologies."
                  isVerified={true}
                  onApply={() => alert("Applying to Google")}
                />
                <JobCard
                  bgColor="bg-red-100"
                  jobTitle="UX Researcher"
                  company="Microsoft"
                  companyLogo={Microsoft} // Replace with your actual image import
                  location="San Francisco, CA"
                  type="Hybrid"
                  salary={16}
                  description="Collaborate with designers and engineers to enhance payment experiences through data-driven research."
                  isVerified={false}
                  onApply={() => alert("Applying to Stripe")}
                />
              </Marquee>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default JobPosts;
