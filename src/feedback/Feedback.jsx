const Feedback = ({ feedbackData }) => {
  return (
    <div className="md:grid grid-cols-4 gap-10">
      {feedbackData.map((feedback) => (
        <div key={feedback.reviewId} className="card bg-base-100 shadow-xl mb-5">
          <div className="card-body">
            <div className="flex gap-2">
              <img
                className="w-12 h-12 rounded-full border-2"
                src={feedback.userImg}
                alt=""
              />
              <h2 className="card-title">{feedback.name}</h2>
            </div>
            <p className="text-justify">{feedback.review}</p>
            <div className="card-actions justify-center">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
