import axios from "axios";

export class AnotherOther {
    test() {
        return axios.get("https://api.chucknorris.io/jokes/random");
    }
}