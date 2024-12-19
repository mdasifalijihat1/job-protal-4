import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../auth/AuthContext";

const SocialLogin = () => {
  const { singInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition mb-4"
      >
        <FcGoogle className="mr-2" size={20} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
