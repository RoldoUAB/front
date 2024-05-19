// src/EventCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format, isSameDay } from 'date-fns';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents([...events, { date: selectedDate, title: newEvent }]);
      setNewEvent('');
    }
  };

  const eventsForSelectedDate = events.filter(event => isSameDay(event.date, selectedDate));

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
      />
      <div className="event-details">
        <h3>Events on {format(selectedDate, 'MMMM dd, yyyy')}:</h3>
        <ul>
          {eventsForSelectedDate.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newEvent}
          onChange={handleInputChange}
          placeholder="Add new event"
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default EventCalendar;
