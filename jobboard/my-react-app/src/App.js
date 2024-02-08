import React, { useState } from 'react';
import Header from './components/Header';
import JobList from './views/JobList';
import CreateJobs from './components/create-new-jobs';
import Tabs from './components/Tabs';
import './App.css';

function App(props) {
  const [jobs, setJobs] = useState(props.jobs);
  const [formDisplayed, setFormDisplayed] = useState(false);

  const createJob = (id, jobtitle, description, availability, company) => {
    const recentJobs = [...jobs, { id, jobtitle, description, availability, company }];
    setJobs(recentJobs);
  };

  const toggleForm = () => {
    setFormDisplayed(!formDisplayed);
  };

  return (
    <div>
      <Header displayed={formDisplayed} onToggleForm={toggleForm} />
      <section className="main">
        <div className="container-md">
          <CreateJobs displayed={formDisplayed} createJob={createJob} />
          <Tabs />
          <JobList jobs={jobs} />
        </div>
      </section>
    </div>
  );
}

export default App;
