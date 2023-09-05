import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css';
import Content from './Content';
import EntryForm from './EntryForm';
import HomePage from './HomePage'; // Import the HomePage component
import Navbar from './Navbar';
import fetchData from './fetchData';
import firebase from './firebase';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchAndSetData() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setError(null);
  
        // Calculate notifications
        const today = new Date();
        const fiveDaysAhead = new Date();
        fiveDaysAhead.setDate(today.getDate() + 5);
  
        const notificationEntries = fetchedData.filter((item) => {
          const renewalDueDate = new Date(item['Renewal Due Date']);
          return renewalDueDate >= today && renewalDueDate <= fiveDaysAhead;
        });
  
        setNotifications(notificationEntries);
      } catch (error) {
        setError('An error occurred while fetching data.');
      }
    }
  
    fetchAndSetData();
  }, []);

  

  const handleDelete = async (index, documentId) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);

    try {
      const firestore = firebase.firestore();
      await firestore.collection('customers').doc(documentId).delete();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleFetchData = async () => {
    try {
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log(fetchedData);
      setError(null);
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
  };



  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Router>
      <div className={`app ${theme === 'dark' ? 'dark-theme' : ''}`}>
        <Navbar fetchData={handleFetchData} theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage notifications={notifications} theme={theme}/>} />
          <Route path="/new-entry" element={<EntryForm theme={theme} />} />
          <Route path="/fetched-data" element={<Content data={data} error={error} theme={theme} onDelete={handleDelete} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
