import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS
import '../CSS/Map.css'; // Assuming you have additional styles here
import L from 'leaflet';
import iconImage from '../images/marker-icon.png'; // Path to your icon image

const provinces = [
  { name: 'Gauteng', lat: -26.1892, lng: 28.0403, suppliers: 'Suppliers: 10000', tenders: 'Active Tenders: 2000', RFQ: 'Active RFQ\'s: 5' },
  { name: 'Western Cape', lat: -33.2278, lng: 21.8569, suppliers: 'Suppliers: 9000', tenders: 'Active Tenders: 1000', RFQ: 'Active RFQ\'s: 15' },
  { name: 'Kwazulu-Natal', lat: -28.5306, lng: 30.8958, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'Northern Cape', lat: -29.0467, lng: 21.8569, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'North West', lat: -26.5896, lng: 26.9905, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'Free State', lat: -28.4541, lng: 26.7465, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'Eastern Cape', lat: -32.2968, lng: 26.4194, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'Limpopo', lat: -23.4015, lng: 29.4179, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' },
  { name: 'Mpumalanga', lat: -25.5653, lng: 30.5279, suppliers: 'Suppliers: 8000', tenders: 'Active Tenders: 3000', RFQ: 'Active RFQ\'s: 16' }
];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.prototype._getIconUrl = function (href) {
  var parts = (href || '').split('/');
  return !parts[0] && !parts[1] ? this.options.imagePath + (this.options.iconUrl || this.options.prefix + this.options.name + '.' + this.options.extension) : href;
};

const customIcon = new L.Icon({
  iconUrl: iconImage,
  iconSize: [28, 26], // Adjust size as needed
  iconAnchor: [12.5, 41], // Anchor point for icon placement
});

const Map = () => {
  const [activeProvince, setActiveProvince] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [provinceInfo, setProvinceInfo] = useState(null); // State to hold province info

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };

  const handleConfirm = () => {
    const province = provinces.find((prov) => prov.name === selectedProvince);
    if (province) {
      setProvinceInfo(province); // Set province info state
      setActiveProvince({ lat: province.lat, lng: province.lng });
    }
  };

  return (
    <div>
      <h1>South Africa Provinces</h1>
      <div className='map'>
        <div className='controls'>
          <select value={selectedProvince} onChange={handleProvinceChange}>
            <option value=''>Select a province</option>
            {provinces.map((province) => (
              <option key={province.name} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
        <MapContainer center={[-29.0739, 24.7128]} zoom={5} style={{ height: '500px', width: '75%', margin: '0 auto' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {provinces.map((province) => (
            <Marker key={province.name} position={[province.lat, province.lng]} icon={customIcon} onClick={() => setActiveProvince(province)}>
              <Popup>
                <h3>{province.name}</h3>
                <p>{province.suppliers}</p>
                <p>{province.tenders}</p>
                <p>{province.RFQ}</p>
              </Popup>
            </Marker>
          ))}

          {activeProvince && (
            <Popup position={activeProvince} onClose={() => setActiveProvince(null)}>
              {provinceInfo && (
                <div>
                  <h3>{provinceInfo.name}</h3>
                  <p>{provinceInfo.suppliers}</p>
                  <p>{provinceInfo.tenders}</p>
                  <p>{provinceInfo.RFQ}</p>
                </div>
              )}
            </Popup>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
