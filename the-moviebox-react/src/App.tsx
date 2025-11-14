import { MovieContent } from "./cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Highlight } from "/Users/edersoncaldato/Documents/DAW-2025/DAW-2025-main/web_prog/the-moviebox-react/src/components/layout/highlight.tsx";
import { Navbar } from "./components/layout/navbar";

function App() {
  return (
    <>
      <Header />
      <main>
        <Highlight />
        <Navbar />
        <MovieContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
