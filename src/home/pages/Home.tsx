import CourcesCarousel from "./CourcesCarousel";
import { FaqWithImage } from "./FaqWithImage";
import { FeaturesTitle } from "./FeaturesTitle";
import { HeroBullets } from "./HeroBullets";

export default function Home() {
  return (
    <>
      <HeroBullets />
      <CourcesCarousel />
      <FeaturesTitle />
      <FaqWithImage />
    </>
  );
}
