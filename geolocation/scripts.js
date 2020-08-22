/* 
  https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/

const button = document.getElementById('button');
const geolocationDiv = document.getElementById('geolocationDiv');

button.addEventListener('click', () => {
  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(getPosition, error, options);
});

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximunAge: 0,
};

const getPosition = (position) => {
  // console.log(`${position.coords.latitude},${position.coords.longitude}`);
  const geoInfo = `${position.coords.latitude},${position.coords.longitude}`;
  const geo = document.createElement('p');
  geo.textContent = geoInfo;
  geolocationDiv.appendChild(geo);
};
const error = (error) => console.log(error);

const detectOS = () => {
  const platform = navigator.platform.toLowerCase(),
    iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];

  if (platform.includes('mac')) return 'MacOS';
  if (iosPlatforms.includes(platform)) return 'iOS';
  if (platform.includes('win')) return 'Windows';
  if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
  if (/linux/.test(platform)) return 'Linux';

  return 'unknown';
};

console.log(detectOS());
