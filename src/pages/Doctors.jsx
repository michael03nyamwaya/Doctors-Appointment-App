import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filteredDoc, setFilteredDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = useMemo(() => {
    if (!doctors || !Array.isArray(doctors)) return [];
    if (speciality) {
      return doctors.filter(doc => doc.speciality === speciality);
    }
    return doctors;
  }, [doctors, speciality]);

  useEffect(() => {
    setFilteredDoc(applyFilter);
  }, [applyFilter]);

  return (
    <div>
      <p>Browse doctors by speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        {/* left */}
        <button
          className={`py-1 px-3 rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>
        <div className={`flex flex-col gap-4 text-sm text-gray-700 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p
            onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            General physician
          </p>
          <p
            onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            Gynecologist
          </p>
          <p
            onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            Dermatologist
          </p>
          <p
            onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            Pediatricians
          </p>
          <p
            onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            Neurologist
          </p>
          <p
            onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}
            className='w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded-lg cursor-pointer transition-all duration-300'
          >
            Gastroenterologist
          </p>
        </div>
        {/* right */}
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filteredDoc.length > 0 ? (
            filteredDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointments/${item._id}`)}
                className='border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'
              >
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-gray-500'>
                    <p className='w-2 h-2 rounded-full bg-green-600'></p> <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-sm text-gray-600'>{item.speciality}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors available for the selected speciality.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
