import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-primary p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">طافچه</Link>
                <div className="space-x-4">
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        درباره ما
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
