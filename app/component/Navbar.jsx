"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-slate-600 text-white container mx-auto px-4 py-2 items-center">
        <div>
          <p className="text-2xl font-bold">Block Viewer</p>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className=" border-2 px-2 py-1 rounded-xl"><Link href={'/'}>Home</Link></li>
            <li className=" border-2 px-2 py-1 rounded-xl"><Link href={'/profile'}>Profile</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className=" border-2 px-2 py-1 rounded-xl">Sign In</li>
            <li className=" border-2 px-2 py-1 rounded-xl">Sign Up</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;