import Head from "next/head";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Turf Booking System</title>
                <meta name="description" content="Book your favorite sports turf in seconds!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="bg-green-600 text-white py-4 shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-2xl font-bold">Turf Booking</h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Login
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

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

            {/* Features Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Why Choose Us?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-gray-700 mb-4">Easy Booking</h4>
                            <p className="text-gray-600">
                                Search and book available turfs in just a few clicks.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-gray-700 mb-4">
                                Secure Payments
                            </h4>
                            <p className="text-gray-600">
                                Make secure payments with trusted gateways like Stripe or PayPal.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <h4 className="text-2xl font-bold text-gray-700 mb-4">Real-Time Updates</h4>
                            <p className="text-gray-600">
                                Get real-time availability and instant booking confirmation.
                            </p>
                        </div>
                    </div>
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
