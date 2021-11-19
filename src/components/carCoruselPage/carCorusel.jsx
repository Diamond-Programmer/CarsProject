import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./sty.css"
import { Img } from "./carCoruselSty";

const CarCorusuel = () => {

  return (
    <div>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <Img src={"https://wallpapershome.ru/images/wallpapers/bmv-3840x2160-4k-hd-wallpaper-elektromobil-sboku-2095.jpg"}  />
        <Img src={'https://wallpapercave.com/wp/wp1970451.jpg'} alt=""  />
        <Img src={'https://c4.wallpaperflare.com/wallpaper/172/667/669/mitsubishi-lancer-evo-ix-japanese-cars-headlights-tuning-wallpaper-preview.jpg'} alt="" />
        <Img src={'https://www.desktopbackground.org/p/2015/04/02/926935_cars-4k-ultra-hd-wallpapers-4k-wallpaper-net_3840x2160_h.jpg'} alt=""  />
        <Img src={'https://image.winudf.com/v2/image1/Y29tLkJlc3RDYXJXYWxscGFwZXJzLkFzdG9uTWFydGlud2FsbHBhcGVyLmltYWdlcy5waG90by5sb2Nrc2NyZWVuX3NjcmVlbl8wXzE1NzA0MTAwMDRfMDA0/screen-0.jpg?fakeurl=1&type=.jpg'} alt=""  />
        <Img src={'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700219485-692x376.jpg'} alt=""  />
        <Img src={'https://cdn.wallpapersafari.com/10/37/oxubEk.jpeg'} alt=""  />
        <Img src={'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700244937.jpg'} alt=""  />
        <Img src={'https://wallpaperaccess.com/full/13642.jpg'} alt=""  />
        <Img src={'https://www.wallpapertip.com/wmimgs/41-412064_8k-car-wallpaper.jpg'} alt=""  />
        <Img src={'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700252952.jpg'} alt=""  />
        <Img src={'https://i.pinimg.com/originals/2f/f9/16/2ff916885293694ecd634d9c910d5445.jpg'} alt=""  />
        <Img src={'https://cdn.wallpapersafari.com/76/25/pAHKbZ.jpg'} alt=""  />
        <Img src={'https://www.hdcarwallpapers.com/download/1967_charge_cars_ford_mustang_4k_2-2560x1440.jpg'} alt=""  />
        <Img src={'https://wallpaperaccess.com/full/1513579.jpg'} alt=""  />
        <Img src={'https://newevolutiondesigns.com/images/freebies/car-wallpaper-4.jpg'} alt=""  />
        <Img src={'https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg'} alt=""  />
      </AliceCarousel>
    </div>
  );
};

export default CarCorusuel;
