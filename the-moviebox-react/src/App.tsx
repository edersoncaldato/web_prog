import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Highlight } from "./components/layout/Highlight";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>

      <main className="min-h-screen">
      <Header />
        <Highlight />
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
