import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './firebase';

function EntryForm({ hideForm, theme }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    'S.No.': '',
    'Customer Name': '',
    'Services': 'Incubation',
    'Service Type': 'Raw',
    'Service Start Date': '',
    'Service End Date': '',
    'Renewal Due Date': ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const firestore = firebase.firestore();
      await firestore.collection('customers').add(formData); // Update with your collection name
      setFormData({
        'S.No.': '',
        'Customer Name': '',
        'Services': 'Incubation',
        'Service Type': 'Raw',
        'Service Start Date': '',
        'Service End Date': '',
        'Renewal Due Date': ''
      }); 
      navigate('/');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className={`entry-form ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="container">
        <h2>Create Entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">S.No.</label>
            <input type="number" className="form-control" name="S.No." value={formData['S.No.']} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Customer Name</label>
            <input type="text" className="form-control" name="Customer Name" value={formData['Customer Name']} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Services</label>
            <select className="form-select" name="Services" value={formData['Services']} onChange={handleInputChange}>
              <option value="Incubation">Incubation</option>
              <option value="DataCom">DataCom</option>
              <option value="EXIM">EXIM</option>
              <option value="PMC">PMC</option>
              <option value="VAPT Security Audit">VAPT Security Audit</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Service Type</label>
            <select className="form-select" name="Service Type" value={formData['Service Type']} onChange={handleInputChange}>
              <option value="Raw">Raw</option>
              <option value="Furnished">Furnished</option>
              <option value="PnP">PnP</option>
              <option value="STP">STP</option>
              <option value="Non STP">Non STP</option>
              <option value="EHTP">EHTP</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Service Start Date</label>
            <input type="date" className="form-control" name="Service Start Date" value={formData['Service Start Date']} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Service End Date</label>
            <input type="date" className="form-control" name="Service End Date" value={formData['Service End Date']} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Renewal Due Date</label>
            <input type="date" className="form-control" name="Renewal Due Date" value={formData['Renewal Due Date']} onChange={handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Create
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EntryForm;
