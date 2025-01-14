import { ProductCard } from "../components/ProductCard";
import { SubpageLayout } from "../components/SubpageLayout";
import reusableStyles from "../Reusable.module.css";
import { useScrollToSection } from "../utils/useScrollToSection";

export const Shop = () => {
  useScrollToSection();

  return (
    <main className={reusableStyles.sectionText}>
      <SubpageLayout>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </SubpageLayout>
    </main>
  );
};
