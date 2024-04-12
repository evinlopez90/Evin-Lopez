
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
      <li>
            <a href="#About">Sobre mi</a>
          </li>
          <li>
            <a href="#Proyects">Projectos</a>
          </li>
          <li>
            <a href="#Teg">Teg</a>
          </li>
          <li>
            <a href="#Contact">Contacto</a>
          </li>
      </ul>

      <p>© 2024 <strong>Evin Lopez</strong>. Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
