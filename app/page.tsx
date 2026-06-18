import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Why from "./components/Why";
import Floor from "./components/Floor";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Why />
        <Floor />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
