import React from 'react';
import './JobList.css';

const JobList = ({ jobs }) => {

  const handleApply = () => {
  const formWindow = window.open('', '_blank');
  formWindow.document.write(`
    <html>
    <head>
      <title>Apply Form</title>
      <link rel="stylesheet" href="JobList.css">
    </head>
    <body>
      <div class="form-container">
        <div class="apply-form">
          <h2>Apply Form</h2>
          <form id="applyForm">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div>
              <label for="number">Number:</label>
              <input type="tel" id="number" name="number" required>
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            <button type="submit" class="apply-button">Submit</button>
          </form>
        </div>
      </div>
    </body>
    </html>
  `);
  formWindow.document.close();
  const applyForm = formWindow.document.getElementById('applyForm');
  // Handle form submission
  applyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(applyForm);
    const name = formData.get('name');
    const number = formData.get('number');
    const email = formData.get('email');
    console.log('Name:', name);
    console.log('Number:', number);
    console.log('Email:', email);
    formWindow.close();
  });
};

  const jobItems = jobs.map((job, i) => (
    <div key={i} className="job-item">
      <h2>{job.jobtitle}</h2>
      <div className="info">
        <span className="tag">Available As: {job.availability}</span>
        <span className="company">Company: {job.company}</span>
      </div>
      <p>{job.description}</p>
      <button className="apply-link" onClick={handleApply}>Apply</button>
    </div>
  ));

  return <div className="job-board">{jobItems}</div>;
};

export default JobList;
