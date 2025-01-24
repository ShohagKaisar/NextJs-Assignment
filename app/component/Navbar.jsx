// "use client";

import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

<LogoutLink>Log out</LogoutLink>

const Navbar = async () => {

  const { getUser } = getKindeServerSession();
  const user =await getUser();

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
            {
              user ? <ul className="flex gap-4 items-center">
                <li>{user.given_name}</li>
                <li className=" border-2 px-2 py-1 rounded-xl"><LogoutLink>Log out</LogoutLink></li>
              </ul> : 
              <ul className="flex gap-4"><li className=" border-2 px-2 py-1 rounded-xl"><LoginLink>Sign in</LoginLink></li>
            <li className=" border-2 px-2 py-1 rounded-xl"><RegisterLink>Sign up</RegisterLink></li></ul>
            }


          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;