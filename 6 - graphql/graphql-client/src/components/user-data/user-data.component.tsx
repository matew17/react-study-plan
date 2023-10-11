import { useQuery } from "@apollo/client";
import { GET_ME } from "../../users/queries";

import styles from "./user-data.component.module.css";

const UserData = () => {
  const { data } = useQuery(GET_ME);

  return (
    <>
      {data?.me && (
        <div className={styles.userDataContainer}>
          <p>{data?.me?.username}</p>

          {data?.me?.friends && <h2>Friends</h2>}
          {data?.me?.friends.map(
            (friend: {
              id: string;
              name: string;
              address: { city: string };
            }) => (
              <p key={friend.id}>
                {friend.name} - {friend?.address.city}
              </p>
            )
          )}
        </div>
      )}
    </>
  );
};

export default UserData;
