import { useEffect, useState } from "react";

import { userService } from "../../services/user.service";

const Profile = () => {
  useEffect(() => {
    fetchUser();
  }, []);

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const fetchedUser = await userService.getUser();
    const user = await fetchedUser.json();

    setUser(user);
  };

  return (
    <div className="container my-4">
      <h2>
        Welcome to your profile, {user?.firstName} {user?.lastName}!
      </h2>
    </div>
  );
};

export default Profile;
