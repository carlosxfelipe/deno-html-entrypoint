import "./styles.css";
import { hello } from "./utils.ts";

console.log(hello("Carlos"));
document.body.insertAdjacentHTML("beforeend", `<p>${hello("Carlos")}</p>`);
