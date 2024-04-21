import axios from "axios";

export async function publicFetcher(
	url: string,
	method: "GET" | "POST" | "PUT" | "DELETE",
	body: any
  ) {
	const res = await fetch(url, {
	  method,
	  headers: {
		"Content-type": "application/json",
	  },
	  body: JSON.stringify(body),
	});
  
	return res;
}

export async function fetchClothes() {
    try {
        let data = axios.get('http://localhost:5000/clothes');
        return data;
    } catch (e) {
        console.log(e);
    }
}