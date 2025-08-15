import { FaClock } from 'react-icons/fa'

const officeHours = [
  { day: "Sun", open: "08:00 am", close: "07:00 pm" },
  { day: "Mon", open: "08:00 am", close: "07:00 pm" },
  { day: "Tue", open: "08:00 am", close: "07:00 pm" },
  { day: "Wed", open: "08:00 am", close: "07:00 pm" },
  { day: "Thu", open: "08:00 am", close: "07:00 pm" },
  { day: "Fri", open: "08:00 am", close: "07:00 pm" },
  { day: "Sat", open: "08:00 am", close: "07:00 pm" },

];

export const OfficeHours = () => {

    const todaysIndex = new Date().getDay();
    const todaySchedule = officeHours[todaysIndex]
   
    const todaysDate = new Date().toLocaleDateString('en-US', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric" 
    })

    return (
        <>
        <div>
            <div className='officeHours'>
                Office Hours
                
            </div>
            <div className='todaySchedule'>
                <span>{todaysDate}</span>
                <span>{todaySchedule.open} - {todaySchedule.close}</span>
            </div>
        </div>

        </>
    )
}