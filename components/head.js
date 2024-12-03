import NavMenu from "./navMenu";
import Head from "next/head";
export default function HeadOfPage() {
    return (
        <div className="bg-green-600">
            <Head className="">
                <title>Turf Booking System</title>
                <meta name="description" content="Book your favorite sports turf in seconds!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="text-white shadow-lg">
                <NavMenu />
            </header>
        </div>
    )
}