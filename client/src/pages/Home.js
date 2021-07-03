import React from 'react';
import {Welcome, SayHello, DownloadApp, InfoMustHave, Advantages, PersonalKeyBlock, TimeBlock, Quote, Coach, Gallery, Offers, Map,WhatsApp} from '../components';
import { galleryData} from '../mock';

const HomePage = () => {
  return(
    <>
      <Welcome />
      <SayHello />
      <DownloadApp />
      <InfoMustHave />
      <Advantages />
      <PersonalKeyBlock />
      <TimeBlock />
      <Quote 
        text="@Крути-верти - безопасно делать и быстро расти!">
        Для занятий не требуется специальный реквизит - достаточно базовых фундаментальных
        движений +<br />
        <span style={{ color: '#5A1CA9' }}>мотивация</span>
        <br />
        <span style={{ color: '#02FF86' }}>настойчивость</span>
        <br />
        <span style={{ color: '#FFE700' }}>собственное воображение</span>
        <br /> - и вот вы уже создаете свою вселенную
      </Quote>
      <Coach />
      <Gallery
        title="Галерея"
        bgColor="#5A1CA9"
        colorTitle="white"
        galleryData={galleryData}
        autoPlay={false}
      >          

        <video
          width="280"
          height="200"
          controls
          autoPlay
          muted
          playsInline
          loop
          src="https://res.cloudinary.com/dwhyb2a2q/video/upload/q_auto:low/v1612423212/promoVideos/shapes-mob_-_SD_480p_k3wxyp_zh1hjt.mov"
        />    
       
        </Gallery>
        <Quote>
          Одновременно с физическим ростом ты развиваешь и умственные навыки , на групповых
          занятиях - развиваются социальные навыки и работа в команде.
        </Quote>
        <Gallery title="Залы" galleryData={galleryData} />
        <Offers />
        <Map />
        <WhatsApp />
    </>
    )
};

export default HomePage;
