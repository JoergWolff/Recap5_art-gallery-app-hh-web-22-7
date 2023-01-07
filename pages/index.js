import Spotlight from "../components/Spotlight";
import { useContext } from "react";

import { globalDataContext } from "./_app";

export default function SpotlightPage() {
  const globalData = useContext(globalDataContext);

  return (
    <div>
      <Spotlight />
    </div>
  );
}
