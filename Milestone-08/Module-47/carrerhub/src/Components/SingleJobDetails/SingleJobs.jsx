import { useLoaderData, useParams } from "react-router-dom";
const SingleJobs = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  console.log(id);
  const job = jobs.find((job) => job.id == id);
  console.log(job);
  return (
    <div>
      <h1>Job Details of {job.job_title}</h1>
    </div>
  );
};

export default SingleJobs;
