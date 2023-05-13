import Swal from "sweetalert2";

const BookingRow = ({booking,handleDelete, handleBookingConfirm}) => {
    const {img, date, email, price, services_title, _id, status} = booking;
    console.log(booking)





    return (
      <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline btn-sm">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
          <td>

            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
               {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
              </div>
            </div>
          </td>
        <td>
            <div>
              <div className="font-bold">{services_title}</div>
            </div>
         
        </td>
        <td>
         {date}
        </td>
        <td>{email}</td>
        <td>${price}</td>
        <th>
         { status === "confirm" ? <span className="text-primary font-bold">Confirmed</span> : <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
        </th>
      </tr>
    

    );
};

export default BookingRow;