"use client";

import { CustomFilter, Slogan, SearchBar, ClothesCard } from "@/components";
import { ClothesProps } from "@/types";
import { fetchClothes } from "@/utils";
import { Card } from "antd";
import Image from "next/image";



export default async function Home() {

  const allClothes = await fetchClothes();
  //console.log(allClothes);
  const isDataEmpty = !Array.isArray(allClothes) || allClothes.length < 1 || !allClothes;
  

  return (
    <main className="overflow-hidden">
      <Slogan />

      <div className="flex">
          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>

          <Card className="flex flex-col col-start-2 mt-10 ml-16 bg-white justify-center items-center shadow-2xl h-20 w-25 gap-3">
            <Image src="/glass.png" alt="glass" width={25} height={25} className=" justify-center items-center ml-1 mb-2" />
            <h2 className=" font-semibold text-sm text-center">Glass</h2>
          </Card>
        </div>

      <div>
        <div className="mt-8 padding-x padding-y max-width" id="discover">
          <div className="home__text-container mt-4">
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
