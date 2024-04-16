"use client";

import { CustomFilter, Slogan, SearchBar, ClothesCard } from "@/components";
import { ClothesProps } from "@/types";
import { fetchClothes } from "@/utils";




export default async function Home() {

  const allClothes = await fetchClothes();
  //console.log(allClothes);
  const isDataEmpty = !Array.isArray(allClothes) || allClothes.length < 1 || !allClothes;
  

  return (
    <main className="overflow-hidden">
      <Slogan />

      <div>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className=" text-4xl font-semibold">Our products</h1>
            <p>Choose the suitable clothes you want here</p>
          </div>


        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter />

          </div>

        </div>

        {isDataEmpty ? (
          <section>
            <div className="home__clothes-wrapper">
              {allClothes?.data?.map((clothes: ClothesProps) => (
                <ClothesCard clothes={clothes} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className=" text-black text-xl font-bold">Oops, no result</h2>

          </div>
        )}

      </div>
    </main>
  );
}
