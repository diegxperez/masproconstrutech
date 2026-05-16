import Header from '../templates/Header';
import Home from '../pages/Home';
import Nosotros from '../pages/Nosotros';
import Proyectos from '../pages/Proyectos';
import Contacto from '../pages/Contacto';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  '/nosotros': Nosotros,
  '/proyectos': Proyectos,
  '/contacto': Contacto,
};

const router = async () => {
  const header = document.getElementById('header') || null;
  const content = document.getElementById('content') || null;

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  // Si estamos en la página principal (mantenimiento), ocultamos el header para un diseño más limpio y centrado
  if (route === '/') {
    header.style.display = 'none';
  } else {
    header.style.display = 'flex';
    header.innerHTML = Header();
  }

  content.innerHTML = await render();
};

export default router;





