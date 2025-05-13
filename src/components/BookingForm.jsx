function BookingForm() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book Your Stay</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
        <input type="date" placeholder="Check-in Date" className="w-full border p-2 rounded" />
        <input type="date" placeholder="Check-out Date" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Room Type</option>
          <option>Single</option>
          <option>Double</option>
          <option>Suite</option>
        </select>
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
