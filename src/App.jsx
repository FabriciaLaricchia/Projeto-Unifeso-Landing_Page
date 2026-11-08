import Header from "./components/Header";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import './App.css'; 

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
      </main>
    </>
  );
}

export default App;