import { useEffect, Ima } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import SwipeViewImage from "../assets/SwipeView.png";
import { useState } from "react";

const SwipeView = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  useEffect(() => {
    if (location.state?.justSignedUp) {
      setShowModal(true);
    }

    navigate(location.pathname, { replace: true });

    const timeout = setTimeout(() => {
      setShowModal(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.state]);

  return (
    <div>
      <Nav />
      <main>
        <section className="container mx-auto  ">
          {showModal && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 px-4 py-2 z-50">
              <p className="font-medium text-center">Welcome User! 🎉</p>
            </div>
          )}
          <div className="flex  justify-center mt-6">
            <img
              src={SwipeViewImage}
              className="cursor-pointer w-[50%] h-[50%]"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SwipeView;
