
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Kanpur",
    date: "March 15, 2025",
    rating: 5,
    comment: "Excellent quality river sand delivered on time. Very satisfied with Buniyaad's service!"
  },
  {
    id: 2,
    name: "Sunita Sharma",
    location: "Lucknow",
    date: "February 28, 2025",
    rating: 4,
    comment: "Good quality cement delivered to my construction site. The prices are competitive and delivery was prompt."
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Hamirpur",
    date: "April 2, 2025",
    rating: 5,
    comment: "Best construction material supplier in the region. Their bricks are of top quality and the delivery team is very professional."
  },
  {
    id: 4,
    name: "Priya Patel",
    location: "Unnao",
    date: "January 20, 2025",
    rating: 4,
    comment: "I've been using Buniyaad for all my construction needs. Their prices are reasonable and quality is consistently good."
  }
];

const CustomerReviews = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-buniyaad-dark">Customer Reviews</h2>
          <p className="text-gray-600 mt-2">What our customers say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-buniyaad-dark">{review.name}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm text-gray-500">{review.location}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
