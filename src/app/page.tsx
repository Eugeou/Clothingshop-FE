import { CustomFilter, Slogan, SearchBar } from "@/components";


export default function Home() {
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

      </div>
    </main>
  );
}
