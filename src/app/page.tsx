import Hero from "@/modules/home/hero/Hero";
import NewDrops from "@/modules/home/new-drops/NewDrops";
import SplitPromo from "@/modules/home/split-promo/SplitPromo";
import Elevate from "@/modules/home/elevate/Elevate";
import FeaturedDrops from "@/modules/home/featured/FeaturedDrops";
import ProductHighlight from "@/modules/home/product-highlight/ProductHighlight";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewDrops />
      <SplitPromo />
      <Elevate />
      <FeaturedDrops />
      <ProductHighlight /> 
    </>
  );
}
