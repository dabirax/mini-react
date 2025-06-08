import { useEffect } from "react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(2);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <section className="section loading"></section>;
  }
  const { company, title, dates, duties } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="title-underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((org, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setValue(index);
                  console.log(index);
                }}
              >
                {org.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className="job-desc" key={index}>
                <FaAngleRight className="job" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};
export default App;
