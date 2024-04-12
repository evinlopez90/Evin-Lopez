/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => item?.category?.includes(buttonCategory));



    setArr(newArr);
  };

  useEffect(() => {
    console.log('me volvi a montar');
  },[arr])

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          Proyectos
        </button>

        <button
          onClick={() => {
            handleClick("full stack");
          }}
          className={currentActive === "full stack" ? "active" : null}
        >
          Full stack
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React 
        </button>
        <button
          onClick={() => {
            handleClick("vue");
          }}
          className={currentActive === "vue" ? "active" : null}
        >
          Vue
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  {/* <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                    tempore dolor in, accusantium laudantium accusamus.
                  </p> */}

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.deploy} target="_blank" className="icon-link"></a>
                      <a href={item.github} target="_blank" className="icon-github"></a>
                    </div>

                    {/* <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a> */}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;