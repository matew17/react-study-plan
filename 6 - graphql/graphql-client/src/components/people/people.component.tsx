import { People } from "../../people/types/people.type";
import { useGetPersonByName } from "../../people/custom-hooks/get-person";

import styles from "./people.component.module.css";
import { useDeletePerson } from "../../people/custom-hooks/delete-person";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../users/mutations";

const People = ({ people }: { people: People[] }) => {
  const { getPerson, visiblePerson, setVisiblePerson } = useGetPersonByName();
  const { deletePerson } = useDeletePerson();

  const [addFriend] = useMutation(ADD_FRIEND);

  const onClickGetPerson = (name: string) => {
    getPerson(name);
  };

  const onClickClosePerson = () => {
    setVisiblePerson(null);
  };

  const onClickDeletePerson = (id: string) => {
    deletePerson(id);

    onClickClosePerson();
  };

  const addAsFriend = (name: string) => {
    addFriend({ variables: { name } });

    onClickClosePerson();
  };

  return (
    <>
      {visiblePerson ? (
        <div className={`${styles.peopleCard} ${styles.peopleCardMax}`}>
          <p>{visiblePerson.name}</p>
          <p>{visiblePerson?.phone}</p>
          <p>{visiblePerson.address.city}</p>
          <p>{visiblePerson.address.street}</p>

          <button
            type="button"
            onClick={() => onClickDeletePerson(visiblePerson.id)}
          >
            Delete
          </button>

          <button type="button" onClick={() => addAsFriend(visiblePerson.name)}>
            Add Friend
          </button>

          <button type="button" onClick={onClickClosePerson}>
            Close
          </button>
        </div>
      ) : (
        <section className={styles.peopleContainer}>
          {people.map((person) => (
            <div
              className={styles.peopleCard}
              key={person.id}
              onClick={() => onClickGetPerson(person.name)}
            >
              <p>{person.name}</p>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default People;
