import React, { useRef } from 'react';

const CreateJobs = ({ displayed, createJob }) => {
  const titleRef = useRef(null);
  const companyRef = useRef(null);
  const descriptionRef = useRef(null);
  const selectRef = useRef(null);

  const handleCreate = (event) => {
    event.preventDefault();
    const jobtitle = titleRef.current.value;
    const description = descriptionRef.current.value;
    const availability = selectRef.current.value;
    const company = companyRef.current.value;
    const id = Math.floor(Math.random() * 100) + 1;

    if (jobtitle === '' || description === '' || availability === '' || company === '') {
      alert('Provide all details for the job');
    } else {
      createJob(id, jobtitle, description, availability, company);
      titleRef.current.value = '';
      descriptionRef.current.value = '';
      companyRef.current.value = '';
    }
  };

  const display = displayed ? 'block' : 'none';
  const styles = { display: display };

  return (
    <form style={styles} onSubmit={handleCreate} id="jobsform">
      <div className="input-group">
        <input type="text" ref={titleRef} placeholder="Job Title" />
      </div>
      <div className="input-group">
        <input type="text" ref={companyRef} placeholder="Company Name" />
      </div>
      <div className="input-group">
        <textarea ref={descriptionRef} placeholder="Description" />
      </div>
      <div className="input-group float-left">
        <button>Post Job</button>
      </div>
      <div className="input-group float-left">
        <select ref={selectRef}>
          <option value="remote">Remote</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
        </select>
      </div>
    </form>
  );
};

export default CreateJobs;
