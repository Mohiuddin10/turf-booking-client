import Link from "next/link";

const NavMenu = () => {
    return (
        <nav className=" text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">
                    <Link href="/">
                        <p className="hover:underline">Turf Booking</p>
                    </Link>
                </h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">
                            <p className="hover:underline">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <p className="hover:underline">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <p className="hover:underline">Contact</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <p className="hover:underline">Login</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;
