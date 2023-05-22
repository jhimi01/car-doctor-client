import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url, {
          method: 'GET',
          headers:{
            authorization: `Bearer ${localStorage.getItem('car-access-token')}`
          }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    },[url])

    console.log(bookings)


    
    const handleDelete =(id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data => {console.log(data)
                if (data.deletedCount > 0) {
                    // Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    //   ) 
                      const remaining = bookings.filter(booking => booking._id !== id)
                      setBookings(remaining)
                }
            })
            }
          })
    }

    const handleBookingConfirm = (id) => {
          fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
              'content-type' : 'application/json',
            },
            body: JSON.stringify({status : 'confirm'})
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
              const remaining = bookings.filter(booking => booking._id !== id);
              const update = bookings.find(booking => booking._id === id);
              update.status = 'confirm';
              const newBookings = [update, ...remaining];
              setBookings(newBookings)
            }
          })
    }




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
        <th>image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Email</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {bookings.map((booking, index) => <BookingRow booking={booking} key={index} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)}
            
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;