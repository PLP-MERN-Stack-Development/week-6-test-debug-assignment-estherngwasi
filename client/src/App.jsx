import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

const API_URL = '/api/bugs';

function App() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState(null);

  const fetchBugs = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setBugs(data);
    } catch (err) {
      setError('Failed to fetch bugs');
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const addBug = async (bug) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bug),
      });
      if (!res.ok) throw new Error('Failed to add bug');
      fetchBugs();
    } catch (err) {
      setError(err.message);
    }
  };

  const updateBug = async (id, updates) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error('Failed to update bug');
      fetchBugs();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteBug = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete bug');
      fetchBugs();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ErrorBoundary>
      <h1>Bug Tracker</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <BugForm onSubmit={addBug} />
      <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />
    </ErrorBoundary>
  );
}

export default App; 