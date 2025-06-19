import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';
import '../stylesheets/company.css'

const Company = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [activeTab, setActiveTab] = useState('events')
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()


     const deleteEvent = async (serviceName, eventId) => {
        try {
        await axios.delete(`http://localhost:3000/api/companies/${id}/services/${serviceName}/events/${eventId}`);
        getComp();
        } catch (err) {
        console.error(err);
        }
    };

  const deleteDirector = async (directorId) => {
    try {
      await axios.delete(`http://localhost:3000/api/companies/${id}/directors/${directorId}`);
      getComp();
    } catch (err) {
      console.error(err);
    }
  };

  const getComp = async () => {
    try {
        const res = await axios.get(`http://localhost:3000/api/companies/${id}`);
        setCompany(res.data);
        setLoading(false)
    } catch (err) {
        console.error(err);
    }
   };


  useEffect(() => {
        getComp();
    }, []);

  return (
    (!company)?<div>Loading</div>:
     <div className="company-container">
      <div className="header">
        <span className="back-arrow" onClick={() => navigate('/entities')}>&larr;</span>
        <h1 className="company-title">{company.companyName}</h1>
      </div>

      <div className="tabs">
        <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>
          Events
        </button>
        <button className={activeTab === 'directors' ? 'active' : ''} onClick={() => setActiveTab('directors')}>
          Directors
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'events' && (
          <div className="events-tab">
            <button className="add-btn" onClick={() => handleAddEvent()}>
                + Add Event
            </button>
            {company.services.map(service =>
              service.events.map(event => (
                <div key={event._id} className="item-card">
                  <p><strong>{service.serviceName} → {event.name}</strong></p>
                  <p>Date: {event.eventDate.slice(0,10)}</p>
                  <p>Time: {event.time}</p>
                  <button onClick={() => deleteEvent(service.serviceName, event._id)}>Delete</button>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'directors' && (
          <div className="events-tab">
            <button className="add-btn" onClick={() => handleAddEvent()}>
                + Add Event
            </button>
            {company.directors.map(director => (
              <div key={director._id} className="item-card">
                <p><strong>{director.directorName}</strong></p>
                <p>DOB: {director.dob}</p>
                <p>Nationality: {director.nationality}</p>
                <p>Gender: {director.gender}</p>
                <button onClick={() => deleteDirector(director._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Company
