import { useContext } from "react";
import AuthContext from "../auth/AuthContext";

const Profile = () => {
    const { user, signOutUser } = useContext(AuthContext); // Ensure `signOutUser` is destructured from AuthContext.

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Successfully signed out');
            })
            .catch((error) => {
                console.log('Sign out error', error);
            });
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {user ? (
                <div>
                    <img
                        src={user.photoURL || 'https://via.placeholder.com/150'}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full"
                    />
                    <p className="mt-4 text-lg">Name: {user.displayName}</p>
                    <p className="text-lg">Email: {user.email}</p>
                    <button
                        onClick={handleSignOut}
                        className="mt-4 bg-blue-400 px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <p className="text-lg">No user is logged in.</p>
            )}
        </div>
    );
};

export default Profile;
