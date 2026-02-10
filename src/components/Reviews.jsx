import { REVIEWS } from '../constants';

const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="reviews">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Reviews
        </h2>
        <p className="max-w-2xl text-center mx-auto mb-12 text-lg lg:text-xl italic">
          "{REVIEWS.text}"
        </p>
        <div className="flex flex-wrap justify-center">
          {REVIEWS.reviews.map((review, index) => (
            <div key={index} className="mt-10 flex flex-col items-center justify-center border-l-2 border-r-2 border-neutral-300 px-8 py-4 lg:w-1/3">
              <p className="mb-4 text-center text-lg">{review.review}</p>
              <div className="flex items-center mt-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide">{review.name}</p>
                  <p className="text-sm text-neutral-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;