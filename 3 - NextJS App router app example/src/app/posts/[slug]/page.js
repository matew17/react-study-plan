/* eslint-disable @next/next/no-img-element */
import { getDataCharacter } from "@/services/rickandmorty.api";
import Image from "next/image";

export default async function Page({ params }) {
  const { slug } = params;

  const { name, image, species, status } = await getDataCharacter(slug);

  return (
    <>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={name}
        />
        {/* <Image
          className="w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt={name}
          width={500}
          height={500}

          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        /> */}

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {species}: {status}
          </p>
        </div>
      </a>
    </>
  );
}
