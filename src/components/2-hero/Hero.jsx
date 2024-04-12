/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Desarrollador web full stack<span className="punto">.</span>
        </motion.h1>
           <img className="i" src="https://cdn.icon-icons.com/icons2/2415/PNG/96/react_original_logo_icon_146374.png" alt="ima" />
           <img className="im" src="https://cdn.icon-icons.com/icons2/2415/PNG/96/vuejs_original_logo_icon_146304.png" alt="ima" />
           <img className="img" src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_node_icon_130301.png" alt="ima" />
           <img className="imgn" src="https://cdn.icon-icons.com/icons2/2108/PNG/96/javascript_icon_130900.png" alt="ima" />
           <img className="t" src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_typescript_official_icon_130107.png" alt="t" />
           <img className="git" src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_git_icon_130581.png" alt="" />
        <p className="sub-title">
       <em>
       "Desde que descubrí el desarrollo web, me apasiona la oportunidad de
          crear soluciones innovadoras para desafíos del mundo real. Hace dos
          años, me embarqué en este viaje de aprendizaje y desde entonces, cada
          día disfruto explorando nuevas tecnologías y tendencias"
       </em>
        </p>

        <div className="all-icons flex">
          <a href="https://twitter.com/LopezEvin910" target="_blank" className="icon icon-twitter"></a>
          <a href="https://github.com/evinlopez90" target="_blank" className="icon icon-github"></a>
          <a href="www.linkedin.com/in/evin-lopez" target="_blank" className="icon icon-linkedin"></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;