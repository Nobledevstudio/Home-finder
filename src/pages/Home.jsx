import CallToAction from "../components/home/CallToAction/CallToAction";
import FeaturedProperties from "../components/home/FeaturedProperties/FeaturedProperties";
import Hero from "../components/home/Hero/Hero";
import HowItWorks from "../components/home/HowItWorks/HowItWorks";
import PropertyCategories from "../components/home/PropertyCategories/PropertyCategories";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";


const Home = () => {
  return (
    <main>
      <Hero />
      <PropertyCategories/>
      <FeaturedProperties />
      <HowItWorks/>
      <WhyChooseUs/>
      <CallToAction/>
    </main>
  );
};

export default Home;