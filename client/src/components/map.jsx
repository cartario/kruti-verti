import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapBlock = () => {
  return (
    <YMaps>
      <div className="map">
        <Map width="" defaultState={{ center: [55.718618, 37.623259], zoom: 10 }}>
          <Placemark
            geometry={[55.708694, 37.751349]}
            options={{ iconColor: 'purple' }}
            properties={{
              iconContent: 'JeeFox',
            }}
          />
          <Placemark 
          properties={{
            iconContent: 'Даниил',
          }}
          geometry={[55.718618, 37.623259]} options={{ iconColor: 'grey' }} onClick={()=>{}}/>
          <Placemark 
          properties={{
            iconContent: 'Smile',
          }}
          geometry={[55.697493, 37.857602]} options={{ iconColor: 'purple' }} onClick={()=>{}}/>
          <Placemark 
          properties={{
            iconContent: 'Даниил',
          }}
          geometry={[55.704271, 37.666674]}           
          options={{ iconColor: 'green' }} onClick={()=>{}}/>
          {/* <Placemark 
          properties={{
            iconContent: 'UniverKids',
          }}
          geometry={[55.755925, 37.883276]} options={{ iconColor: 'yellow' }} onClick={()=>{}}/> */}
         
        </Map>
      </div>
    </YMaps>
  );
};

export default MapBlock;
