import logo from '../../src/assets/logos/logo-Maspro-letras-negras.png'

const Header = () => {
  const view = `
      <img class="w-24" src="${logo}" alt="logo-masproconstructech">
      <ul class="flex gap-x-6 uppercase">
        <li>
          <a class="text-neutral-500 hover:font-bold hover:text-neutral-900 hover:italic transition duration-300 ease-in-out"
            href="/">Inicio</a> 
        </li>
        <li>
          <a class="text-neutral-500 hover:font-bold hover:text-neutral-900 hover:italic transition duration-300 ease-in-out"
            href="#/nosotros">Nosotros</a>
        </li>
        <li>
          <a class="text-neutral-500 hover:font-bold hover:text-neutral-900 hover:italic transition duration-300 ease-in-out"
            href="#/proyectos">Proyectos</a>
        </li>
        <li>
          <a class="text-neutral-500 hover:font-bold hover:text-neutral-900 hover:italic transition duration-300 ease-in-out"
            href="#/contacto">Contacto</a>
        </li>
      </ul>
  `;
  return view;
};

export default Header;