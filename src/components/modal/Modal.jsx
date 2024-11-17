const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Book Appointment!</h3>
        {/* Form Start */}

        <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <div className="flex gap-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                name="Fname"
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                name="Lname"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
         <div className="flex gap-3">
         <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              type="email"
              placeholder="jhon@doe.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone Number</span>
            </div>
            <input
              name="phone"
              type="number"
              placeholder="01*********"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
         </div>
          <div className="flex gap-3">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Appointment Date</span>
            </div>
            <input
              name="date"
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Explain Your Diagnose</span>
            </div>
            <input
              name="description"
              type="text"
              placeholder="Explain Here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          </div>
        </div>
        {/* Submit btn */}
        <div className="flex justify-center mt-3">
        <button className="btn btn-accent" type="submit">Make Appointment</button>
        </div>
        </form>

        {/* close btn */}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <div className=" flex justify-center mt-3">
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
