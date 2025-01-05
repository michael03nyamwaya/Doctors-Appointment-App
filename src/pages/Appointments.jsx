import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoc from '../components/RelatedDoc';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [docslots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]); // Resetting slots

    // Getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // End time of the date (e.g., 9 PM)
      let endDate = new Date();
      endDate.setDate(today.getDate() + i);
      endDate.setHours(21, 0, 0, 0);

      // Adjusting current date based on the time
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endDate) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // Increment time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log(docslots);
  }, [docslots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Doctor Image */}
          <div>
            <img className="bg-primary sm:max-w-72 rounded-lg" src={docInfo.image} alt="" />
          </div>
          {/* Doctor Info */}
          <div className="flex-1 border border-gray-600 p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center text-2xl gap-2 text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className="py-0.5 px-2 rounded-full border text-sm">{docInfo.experience}</button>
            </div>
            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-2 text-sm font-medium mt-3 text-gray-900">
                About
                <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm max-w-[700px] mt-3 text-gray-500">{docInfo.about}</p>
            </div>
            <p className="font-medium text-gray-500 mt-4">
              Appointment fee: <span className="text-gray-700">{currency}{docInfo.fees}</span>
            </p>
          </div>
        </div>
        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docslots.length > 0 &&
              docslots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index ? 'bg-primary text-white' : 'border border-gray-400'
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-6">
            {docslots.length > 0 &&
              docslots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book appointment</button>
        </div>
        {/* Pass docInfo.speciality to RelatedDoc component */}
        <RelatedDoc docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointments;
