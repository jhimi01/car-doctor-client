import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])

    console.log(bookings)

    return (
        <div>
            <h2>bookings : {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>Service</th>
        <th>Date</th>
        <th>Email</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    {bookings.map((booking, index) => <BookingRow booking={booking} key={index}></BookingRow>)}
            
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;