"use-client";

import { useState, Fragment} from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";
import { SearchClothesTypeProps } from "@/types";
import { clothestypes } from "@/constants";
import { relative } from "path";

const SearchClothesType = ({clothestype, setClothesType}: SearchClothesTypeProps) => {

    const [query, setQuery] = useState('');

    const filteredClothesTypes = 
        query === "" 
        ? clothestypes 
        : clothestypes.filter((item) => 
            item
                .toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

    return (
        <div className="search-clothestype">
            <Combobox value={clothestype} onChange={setClothesType}>
                <div className=" relative w-full ">
                    <Combobox.Button className=" absolute top-[14px]">
                        <Image  
                            src="/t-shirt.png"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Clothes"
                        />
                    </Combobox.Button>

                    <Combobox.Input 
                        className="search-clothestype__input focus:placeholder-transparent"
                        placeholder="Ex: T-shirt"
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                        {filteredClothesTypes.length === 0 &&
                            query !== "" ? (
                                <Combobox.Option
                                    value={query}
                                    className="search-clothestype__option"
                                >
                                    Can not find the clothes type "{query}"
                                </Combobox.Option>
                            ) : (
                                filteredClothesTypes.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active}) => `
                                        relative search-clothestype__option
                                        ${active ? 'bg-primary-blue text-white'
                                            : 'text-gray-900'}
                                        `}
                                        value={item}
                                    >
                                        {item}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>

                </div>
            </Combobox>
        </div>
    )
}

export default SearchClothesType

