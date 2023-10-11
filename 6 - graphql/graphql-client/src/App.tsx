import "./App.css";

import { useGetPeople } from "./people/custom-hooks/get-people";

import People from "./components/people/people.component";
import PeopleForm from "./components/people-form/people-form.component";
import { useState } from "react";
import UserAvatar from "./components/user/user-avatar.component";

function App() {
  const { loading, error, data } = useGetPeople();

  const [token, setToken] = useState(
    () => localStorage.getItem("graphql-user") ?? ""
  );

  if (error) {
    return <div>Server error: {error.message}</div>;
  }

  return (
    <>
      <section className="header">
        <h1>GraphQL With React</h1>
        <div>
          <UserAvatar token={token} setToken={setToken} />
        </div>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <PeopleForm />
          <People people={data.allPeople} />
        </>
      )}
    </>
  );
}

export default App;

// Example of calling GraphQL with fecth.
//   useEffect(() => {
//     fetch("http://localhost:4000", {
//       method: "POST",
//       headers: {
//         "Content-type": "Application/json",
//       },
//       body: JSON.stringify({
//         query: `
//             query {
//                 peopleCount
//                 allPeople {
//                     id
//                     name
//                     phone
//                 }
//             }
//         `,
//       }),
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.data);
//       });
//   }, []);
