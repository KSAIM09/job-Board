import React, { useRef } from 'react';

const JobListItem = ({ createJob }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const handleCreate = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const id = Math.floor(Math.random() * 100) + 1;

    if (title === '' || description === '') {
      alert('Please enter a job title and description');
    } else {
      createJob(id, title, description);
      titleRef.current.value = '';
      descriptionRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <div className="input-group">
        <input type="text" ref={titleRef} placeholder="Job Title" />
      </div>
      <div className="input-group">
        <input type="text" ref={descriptionRef} placeholder="Description" />
      </div>
      <div className="input-group">
        <button>Post Job</button>
      </div>
    </form>
  );
};

export default JobListItem;
