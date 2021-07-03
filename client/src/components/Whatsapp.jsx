import React from 'react';

const WhatsApp = ({title=""}) => {
  const [whatsApp, setWhatsApp] = React.useState('');
  const handleWhatsApp = (e) => {
    setWhatsApp(e.target.value);
  };
  
  return (
    <div className="offer-page__contact">
      <div>
        <input placeholder="введите сообщение" value={whatsApp} onChange={handleWhatsApp} />
      </div>
      <a href={`https://api.whatsapp.com/send/?phone=%2B79264915349&text=${"Вопрос по теме:"+title+"__"+whatsApp}&app_absent=0`}>
        Задать вопрос в WhatsApp
      </a>
    </div>
  );
};


export default WhatsApp;
