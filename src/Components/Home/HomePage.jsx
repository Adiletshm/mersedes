import React from "react";
import "./HomePage.css";
import Img1 from "./Img/Img1.png";
import Img2 from "./Img/Img2.png";
import Img3 from "./Img/Img3.png";
import Img4 from "./Img/Img4.png";
import Img5 from "./Img/Img5.png";
import Img6 from "./Img/Img6.png";
import Video1 from "./Img/Video1.mp4";
import Video2 from "./Img/Video2.mp4";

const HomePage = () => {
  return (
    <>
      <div className="black">
        <img src="https://www.mercedes-benz.ru/content/russia/ru/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3284656097598.jpg/Maybach_2558x1066_1.jpg" />
        <img src={Img1} />
        <img src={Img2} />
        <img className="img4" src={Img3} />
        <img className="img4" src={Img4} />
        <img src="https://www.mercedes-benz.ru/passengercars/content-pool/marketing-pool/product-page-stages/g-class-suv-w463-stage/_jcr_content/par/stageelement_dffd.MQ6.0.stage.20190620145115.jpeg" />
        <img src={Img5} />
        <video src={Video1} autoPlay={true} width="100%" muted="true"></video>
        <img src={Img6} />
        <video src={Video2} autoPlay={true} width="100%" muted="true"></video>
      </div>
    </>
  );
};

export default HomePage;
