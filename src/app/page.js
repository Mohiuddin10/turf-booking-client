import ImageSlider from "../../components/imageSlider";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ImageSlider />

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Turf
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book sports grounds in your city with real-time availability and secure payments.
          </p>
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Turf Booking. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}