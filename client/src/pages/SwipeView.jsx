import React, { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SwipeView = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-between container mx-auto p-4 ">
      <p>Swipe View</p>

      <div>
        <button
          onClick={logout}
          className="p-2 bg-red-500 px-4 py-2 text-white rounded-2xl cursor-pointer"
        >
          Logout
        </button>
      </div>

      <p>Welcome {user?.name}</p>
    </div>
  );
};

export default SwipeView;
