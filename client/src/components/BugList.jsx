import React from 'react';

const BugList = ({ bugs, onUpdate, onDelete }) => (
  <ul>
    {bugs.length === 0 ? (
      <li>No bugs reported.</li>
    ) : (
      bugs.map(bug => (
        <li key={bug._id}>
          <strong>{bug.title}</strong>: {bug.description} <br />
          Status: {bug.status}
          <button onClick={() => onUpdate(bug._id, { status: 'in-progress' })}>In Progress</button>
          <button onClick={() => onUpdate(bug._id, { status: 'resolved' })}>Resolve</button>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))
    )}
  </ul>
);

export default BugList; 