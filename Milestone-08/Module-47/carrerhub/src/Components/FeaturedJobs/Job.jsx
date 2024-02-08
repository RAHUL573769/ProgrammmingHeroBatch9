/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

/* eslint-disable no-unused-vars */
const Job = ({ job }) => {
  console.log(job);

  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements
  } = job;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/job/${id}`);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-lime-600 gap-4">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>

          <div>
            <h2>Location:{location}</h2>
            <h2>Salary:{salary}</h2>
            <h2>
              <b>Job Description</b>:{job_description}
            </h2>
          </div>
          <div>
            <button className="px-5 py-3 font-semibold  te border-purple-300">
              {remote_or_onsite}
            </button>
            <button>{job_type}</button>
          </div>

          <div className="flex mt-4">
            <h2>Location :{location}</h2>
            <h2>Salary:{salary}</h2>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleNavigate} className="btn btn-primary">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
