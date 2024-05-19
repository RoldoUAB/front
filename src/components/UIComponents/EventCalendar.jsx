// src/EventCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './EventCalendar.css';

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = () => {
    const eventTitle = prompt('Enter event title:');
    if (eventTitle) {
      setEvents([...events, { date, title: eventTitle }]);
    }
  };

  const getEventsForDate = (date) => {
    return events.filter(event => event.date.toDateString() === date.toDateString());
  };

  return (
    <div className="event-calendar">
      <Calendar onChange={handleDateChange} value={date} />
      <button onClick={handleAddEvent }>Add Event</button>
      <div className="events-list calendar-button">
        <h3>Events for {date.toDateString()}:</h3>
        <ul>
          {getEventsForDate(date).map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCalendar;