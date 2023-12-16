import React from 'react'
import Header from '../components/Layout/Header'
import EventCard from '../components/Route/Event/EventCard'
import { useSelector } from 'react-redux';
import Loader from "../components/Layout/Loader"

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  return (
    <div>
        <Header activeHandling={4} />
        <EventCard active={true} data={allEvents && allEvents[0]} />
    </div>
  )
}

export default EventsPage