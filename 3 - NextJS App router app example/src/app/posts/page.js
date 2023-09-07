import { Character } from "@/components/character";
import { getData } from "@/services/rickandmorty.api";

export default async function Page() {
  const { results } = await getData();

  return (
    <>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-between",
          padding: "1rem 0",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        {results.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            id={character.id}
          />
        ))}
      </section>
    </>
  );
}
