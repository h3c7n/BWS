import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-pink-400 p-4 text-center relative">
        <h1 className="text-white text-3xl font-bold">Beauty Woman Stars</h1>
        <nav className="mt-4">
          <div className="menu-toggle text-2xl text-white cursor-pointer md:hidden" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center gap-8 ${isMenuOpen ? 'absolute left-0 top-full w-full bg-pink-400 p-4' : ''}`}>
            <li><a href="#problemas" className="text-white font-bold hover:text-pink-100">Serviços</a></li>
            <li><a href="#solucoes" className="text-white font-bold hover:text-pink-100">Tratamentos</a></li>
            <li><a href="#recursos" className="text-white font-bold hover:text-pink-100">Recursos</a></li>
            <li><a href="#contato" className="text-white font-bold hover:text-pink-100">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero relative">
          <img 
            src="/images/clinica.jpg" 
            alt="Interior da Clínica" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 p-4 rounded-lg text-center w-[90%] max-w-[600px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Transforme sua beleza em uma obra de arte</h2>
            <p className="mb-4">Tratamentos personalizados para realçar sua beleza natural.</p>
            <a href="#solucoes" className="inline-block bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition-colors">
              Saiba Mais
            </a>
          </div>
        </section>

        <section id="resumo" className="py-12 px-4 text-center bg-gray-50">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Nossos Tratamentos</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa linha completa de tratamentos estéticos e cuidados personalizados para sua beleza.
          </p>
        </section>
      </main>

      <footer className="bg-pink-400 text-white text-center p-4 fixed bottom-0 w-full">
        <p className="mb-2">&copy; 2024 Beauty Woman Stars. Todos os direitos reservados.</p>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-pink-100">Termos de Uso</a>
          <span>|</span>
          <a href="#" className="text-white hover:text-pink-100">Política de Privacidade</a>
        </div>
      </footer>
    </div>
  );
}

export default App;