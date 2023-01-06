import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/Spotlight/Spotlight";
import { useContext } from "react";

import { myDataContext } from "./_app";

export default function SpotlightPage() {
  const globalData = useContext(myDataContext);
  console.log(globalData);

  return (
    <div>
      <Spotlight />
      {/* <ArtPieces /> */}
    </div>
  );
}
