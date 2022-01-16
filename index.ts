import { AnotherOther } from "./another-other";
import Other from "./other";

new Other();
new AnotherOther().test().then(response => console.log(response.data.value));