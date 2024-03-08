import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Projectsdb from "./admin/Projectsdb";

function Private() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed Out"))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2>Top Secret</h2>
      <Projectsdb />
      <button
        onClick={handleSignOut}
        className="border-solid border-2 p-1 border-indigo-600 rounded-lg"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Private;
