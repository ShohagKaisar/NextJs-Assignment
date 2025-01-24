import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export default async function page() {

  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="mt-8 flex items-center justify-center bg-gray-100 p-6">
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col items-center p-6">
        {/* Profile Picture */}
        <img
          src={user?.picture}
          alt="User Profile"
          className="w-24 h-24 rounded-full shadow-md border-4 border-blue-500"
        />

        {/* User Name */}
        <h1 className="text-2xl font-semibold text-gray-800 mt-4">
          {user?.given_name} {user?.family_name}
        </h1>

        {/* Email */}
        <p className="text-gray-500 mt-2">{user?.email}</p>
      </div>
    </div>
  </div>
  )
}
