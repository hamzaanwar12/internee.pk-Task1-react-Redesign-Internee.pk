import React from 'react';
import NavBar from '../Navbar';
import '../Tasks/Task.css';
import Footer from '../Footer';

export default function Task1() {
  return (
    <div>
      <NavBar />
      <div className="task-heading">
        <h2>Task 1</h2>
      </div>
      <div className="task-container">
        <div className="task-details">
          <div className="task-info">
            <h3>Task Detail</h3>
            <p> <span>Task:</span>  Redesign internee.pk Website</p>
            <p><span>Category:</span>  React Internship</p>
           
            <ul>
            <h6>Description</h6>
              <li>Develop the frontend of the website using React, ensuring a responsive design for various devices and screen sizes.</li>
              <li>Create interactive and dynamic user interfaces with React components.</li>
              <li>Implement animations and transitions to enhance user engagement and interactivity.</li>
              <li>Design a user-friendly navigation menu that adapts to different screen sizes and devices.</li>
              <li>Integrate React components to add interactive features, such as contact forms, sliders, and dynamic content loading.</li>
              <li>Implement client-side validation for user inputs to improve user experience and data integrity.</li>
              <li>Collaborate with other frontend technologies like HTML and CSS to ensure a cohesive and visually appealing user interface.</li>
              <li>Conduct thorough testing of the React components to identify and fix any issues.</li>
              <li>Provide documentation for React component development and usage if needed.</li>
            </ul>
            <p> <span> Start Date:</span> 2024-01-03</p>
            <p><span> Deadline:</span> 2024-02-03</p>
            <p><span>Countdown:</span> 8d 4h 9m 37s</p>
          </div>
        </div>
      </div>


      {/**second one */}
      <div className="task-container" style={{marginTop:'20px'}}>
        <div className="task-details">
          <div className="task-info">
            <h3>Your Productivity</h3>
            <div className="productivity">
            <h5> Task Description</h5>
            <textarea rows="10" cols="50" placeholder="Enter productivity details..."></textarea>
          </div>
           
          <div className="github-link">
            <label htmlFor="github-link">GitHub Link (For Development Task):</label>
            <input type="text" id="github-link" name="github-link" placeholder="Enter GitHub link" />
          </div>
          <div className="github-link">
            <label htmlFor="github-link"> Google Drive Link (After Upload):</label>
            <input type="text" id="github-link" name="github-link" placeholder="Enter Google drive link" />
          </div>

          <div className="github-link">
            <label htmlFor="task-status">Task Status:</label>
            <select id="task-status" name="task-status">
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <button className='btnTask'>Save</button>

          </div>
        </div>
      </div>
<Footer />
    </div>
  );
}
