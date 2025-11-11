export function Highlight() {
    return (
    <section className="flex relative bg-cover
     bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] 
     bg-position-[left_calc((50vw-170px)-340px)_top]">
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,rgba(17,17,17,1)_calc((50vw-70px)-340px),rgba(17,17,17,0.7)_50%,rgba(17,17,17,0.7)_100%)]"></div>
      <div className="flex gap-8 py-8 z-20 container mx-auto px-4">
        <img className="rounded-lg" src="./img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg" alt="Capa filme" />
        <div className="flex flex-col">
          <h2 className="text-4xl font-normal">Como Treinar o seu Dragão</h2>
          <div className="text-sm my-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">Fantasia</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Família</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Ação & Aventura</span>
            <span className="pl-4 text-gray-300">2h 5m</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-normal pt-12 pb-2">Sinopse</h4>
            <p className="columns-[#a0a0a0] text-sm">Em um mundo onde dragões e humanos coexistem, um jovem viking chamado Soluço se torna amigo de um dragão
              ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são
              os monstros que todos acreditavam ser.</p>
          </div>

          <div className="flex gap-4 my-6">
            <button className="bg-[#e50914] text-white border-none py-3 px-6 rounded-sm font-bold transition duration-300 ease-in-out hover:bg-[#e50914]/80 cursor-pointer">Assistir</button>
            <button className="bg-white/20 text-white border border-white/30 py-3 px-6 rounded-sm transition duration-300 ease-in-out cursor-pointer hover:bg-white/30">Detalhes</button>
            <button className="bg-white/20 text-white border border-white/30 py-3 px-6 rounded-sm transition duration-300 ease-in-out cursor-pointer hover:bg-white/30">+ Adicionar à Lista</button>
          </div>
        </div>
      </div>
    </section>
)
}