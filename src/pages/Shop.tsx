import { ProductCard } from "../components/ProductCard";
import { SubpageLayout } from "../components/SubpageLayout";
import reusableStyles from "../Reusable.module.css";

export const Shop = () => {
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
