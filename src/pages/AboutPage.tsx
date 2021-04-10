import React from "react";
import { useHistory } from "react-router-dom";

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
        similique fugit consectetur dolorem quaerat recusandae nam, aspernatur
        dignissimos dolor? Non aliquid cum est?
      </p>
      <button className='btn' onClick={() => history.push("/")}>
        Обратно к списку дел
      </button>
    </>
  );
};
export default AboutPage;
