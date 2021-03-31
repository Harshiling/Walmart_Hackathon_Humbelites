import axios from "axios";


export async function sendData(postData) {
    let data;
    try {
        data = await axios.post("http://localhost:3001/electronics", postData);
    }
    catch (e) {
        data = -1;
    }
    return data;
}

export async function getData() {
    let data;
    try {
        data = await axios.get("http://localhost:3001/");
    }
    catch (e) {
        data = -1;
    }
    return data;
}
