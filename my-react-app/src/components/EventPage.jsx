import React from 'react';
import '../assets/user/event.css';

const EventPage = () => {
  const rsvpForEvent = () => alert("You have successfully RSVP'd for the event.");
  const setEventReminder = () => alert("Event reminder has been set.");
  const viewPastEventDetails = () => alert("Here are the details of the past event.");
  const showEvents = () => {
    const selectedDate = document.getElementById('event-date').value;
    alert(`You selected: ${selectedDate}. Events will be displayed here.`);
  };

  return (
    <div>
      <header>
        <h1>Upcoming Events</h1>
        <p>Stay updated with the latest events, workshops, and meetings.</p>
      </header>

      <section className="event-categories">
        <h2>Event Categories</h2>
        <div className="categories">
          <button><i className="fas fa-tools"></i> Workshops</button>
          <button><i className="fas fa-users"></i> Meetings</button>
          <button><i className="fas fa-chalkboard-teacher"></i> Conferences</button>
          <button><i className="fas fa-laptop"></i> Webinars</button>
        </div>
      </section>

      <section className="event-calendar">
        <h2>Event Calendar</h2>
        <div className="calendar-container">
          <input type="date" id="event-date" />
          <button onClick={showEvents}><i className="fas fa-calendar-alt"></i> View Events</button>
        </div>
      </section>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <div className="event-item">
          <h3>Annual Tech Conference</h3>
          <p><i className="fas fa-calendar-day"></i> Date: 25th January 2025</p>
          <p><i className="fas fa-map-marker-alt"></i> Location: MITAOE Campus</p>
          <button className="rsvp-btn" onClick={rsvpForEvent}><i className="fas fa-check"></i> RSVP</button>
        </div>
        <div className="event-item">
          <h3>AI Workshop</h3>
          <p><i className="fas fa-calendar-day"></i> Date: 2nd February 2025</p>
          <p><i className="fas fa-map-marker-alt"></i> Location: Online</p>
          <button className="rsvp-btn" onClick={rsvpForEvent}><i className="fas fa-check"></i> RSVP</button>
        </div>
      </section>

      <section className="event-reminders">
        <h2>Event Reminders</h2>
        <button onClick={setEventReminder}><i className="fas fa-bell"></i> Enable Reminder</button>
      </section>

      <section className="past-events">
        <h2>Past Events</h2>
        <div className="event-item">
          <h3>2024 Annual Conference</h3>
          <p><i className="fas fa-calendar-day"></i> Held on: 15th December 2024</p>
          <button className="view-details-btn" onClick={viewPastEventDetails}><i className="fas fa-info-circle"></i> View Details</button>
        </div>
      </section>

      <footer>
        <button onClick={() => window.history.back()}><i className="fas fa-arrow-left"></i> Back</button>
      </footer>
    </div>
  );
};

export default EventPage;
