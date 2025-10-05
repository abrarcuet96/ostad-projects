import StatsCard from "../components/StatsCard";
import MasterLayout from "../layout/MasterLayout";
import bannerImg from "./../../public/banner-img.webp";
const Home = () => {
  return (
    <MasterLayout>
      <div className="max-w-screen-xl mx-auto flex my-10 border border-pink-300 rounded-md p-3">
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold">
              <span className="text-pink-600">HI!</span> There I'm
            </p>
            <h1 className="text-5xl font-bold">HI, I'M ABRAR!</h1>
            <h1 className="text-5xl font-bold text-pink-600">
              FULLSTACK DEVELOPER!
            </h1>
            <p>
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
            <button className="w-fit border px-2 py-2 rounded-md bg-pink-600 text-white">
              Hire Me Now!
            </button>
          </div>
          <div className="flex gap-2">
            <StatsCard
              statsNumber="4+"
              statsDescription="YEARS OF AWESOME
EXPERIENCE"
            />
            <StatsCard
              statsNumber="200+"
              statsDescription="PROJECTS COMPLETED
ON THIS YEAR"
            />
            <StatsCard
              statsNumber="780+"
              statsDescription="HAVE TEAM MEMBER
ON 10 COUNTRY"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-end">
          <img src={bannerImg} className="size-96" />
        </div>
      </div>
    </MasterLayout>
  );
};

export default Home;
