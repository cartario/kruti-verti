import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapBlock = () => {
  return (
    <YMaps>
      <div className="map">
        <Map width="" defaultState={{ center: [55.718618, 37.623259], zoom: 10 }}>
          <Placemark
            geometry={[55.708694, 37.751349]}
            options={{ iconColor: 'orange' }}
            properties={{
              iconContent: 'JeeFox',
            }}
          />
          <Placemark geometry={[55.718618, 37.623259]} options={{ iconColor: 'grey' }} onClick={()=>alert('yo')}/>
        </Map>
      </div>
    </YMaps>
  );
};

export default MapBlock;
