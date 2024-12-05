import { createRoot } from "react-dom/client";
import "./index.css";
import MultipleState from "./components/MultipleState";
import MultipleStateAdvanced from "./components/MultipleStateAdvanced";
import SelectingHobbies from "./components/SelectingHobbies";
import HobbiesApp from "./components/HobbiesApp/HobbiesApp";
import SearchFilter from "./components/SearchFilter/SearchFilter";

createRoot(document.getElementById("root")).render(<SearchFilter />);
