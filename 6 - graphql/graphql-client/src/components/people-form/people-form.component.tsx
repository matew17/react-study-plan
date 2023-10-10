import { SyntheticEvent } from "react";

import styles from "./people-form.component.module.css";
import { useCreatePerson } from "../../people/custom-hooks/create-person";
import { useForm } from "../../core/custom-hooks/use-form";

const PeopleForm = () => {
  const { addPerson, error } = useCreatePerson();
  const { values, handleChange, resetForm } = useForm({
    name: "",
    city: "",
    street: "",
    phone: "",
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const { name, city, street, phone } = values;

    addPerson({
      name,
      city,
      street,
      phone,
    });

    resetForm();
  };

  return (
    <section className={styles.sectionContainer}>
      <h2>Create Person:</h2>

      {error && <div style={{ color: "red" }}>Error : {error}</div>}
      <form noValidate onSubmit={handleSubmit} className={styles.formContainer}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={values.city}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Street"
          name="street"
          value={values.street}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default PeopleForm;
