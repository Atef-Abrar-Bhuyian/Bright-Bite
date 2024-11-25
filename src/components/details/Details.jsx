import { useLoaderData } from "react-router-dom";
import Modal from "../modal/Modal";
import { useContext } from "react";


const Details = () => {
  const { cost, description, image, treatment, id } = useLoaderData();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
          <p className="mb-5">{description}</p>

          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Book Appointment
          </button>
        </div>
      </div>
      <Modal></Modal>
    </div>
  );
};

export default Details;
