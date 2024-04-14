"use-client";

import { useState } from "react";
import SearchClothesType from "./SearchClothesType";

const SearchBar = () => {

    const [clothestype, setClothesType] = useState("")

    const [model, setModel] = useState("");

    const handleSearch = () => {}

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchClothesType 
                    clothestype={clothestype}
                    setClothesType={setClothesType}
                />
            </div>
        </form>
    )
}

export default SearchBar