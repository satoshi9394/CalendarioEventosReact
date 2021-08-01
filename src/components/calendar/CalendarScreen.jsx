import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const events = [{
  title: 'Cumple del jefe',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#367cf7',
  notes: 'Comprar el pastel del jefe'
}]

const CalendarScreen = () => {
  const eventStyleGetter = (event, star, end, isSelected) => {
    const style = {
      backgroundColor: event.bgcolor,
      borderRadiud: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }

    return {
      style
    }
  };

  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
    />
    </div>
  )
}

export default CalendarScreen
