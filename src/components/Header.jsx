function Header(){
    return(
            <header className="bg-black flex justify-center">
                <div className="container flex justify-between items-center text-white">
                <img src="../imagens/logo.png" alt="nao tem" width="100" />

                <nav className="flex gap-10">
                    <a href="#sobre"className="hover:text-gray-400">Sobre </a>
                    <a href="#portfolio"className="hover:text-gray-400">Portifolio </a>
                    <a href="#contato"className="hover:text-gray-400">Contato </a>
                </nav>
                </div>
            </header>
    )
}
export default Header;