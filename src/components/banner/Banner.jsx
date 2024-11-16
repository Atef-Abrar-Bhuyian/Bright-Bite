import bannerPic from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerPic} className="max-w-sm" />
        <div>
          <h1 className="text-5xl font-bold">Welcome to Bright Bite!</h1>
          <p className="py-6">
          Experience expert dental care in a friendly environment. At Bright Bite, we’re dedicated to giving you a brilliant, healthy smile. Start your journey to exceptional oral health today.
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
