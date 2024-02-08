import { useEffect, useState } from "react";
import Job from "./Job";

const FeatuedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-6xl text-center text-white">
          Featured Job Categories {featuredJobs.length}
        </h1>

        <p className="text-center">
          Explore thousands of Featured Jobs opportunities{" "}
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredJobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === featuredJobs.length && "hidden"}>
        <button
          className="btn btn-primary"
          onClick={() => setDataLength(featuredJobs.length)}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FeatuedJobs;
