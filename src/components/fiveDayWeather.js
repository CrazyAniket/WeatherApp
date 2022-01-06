// import React, { Component } from 'react'
// import './forecast.scss'

// class FiveDayWeather extends Component {
//     render() {
//         const items = this.props.forecast.map((f, i) => {
//           console.log(f);
//         //   const image = {
//         //     url: `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`,
//         //     alt: `Image of  ${f.weather[0].description}`,
//         //   };
//           const pressure = f.weather.pressure;
//           const unixTimestamp = f.dt;
//           let hour = new Date(unixTimestamp * 1000).getHours();
//           let ampm = 'AM';
//           if (hour === 0) hour = 12;
//           else if (hour > 12) {
//             hour = hour - 12;
//             ampm = 'PM';
//           }
    
//           return (
//             <div key={i} className="forecast-item">
//               <p className="forecast-item__time">{hour} {ampm}</p>
//               <p className="forecast-item__temp">
//                 {f.temp} <span className="forecast-item__degree">°</span>
//               </p>
//               {/* <img className="forecast-item__img" src={image.url} alt={image.alt} /> */}
//               <p className="forecast-item__description">{pressure}</p>
//             </div>
//           );
//         });
    
//         return (
//           <div>
//             <div className="forecast">
//               <h3 className="forecast__title">Hourly Forecast</h3>
//               <div className="forecast-items">{items}</div>
//             </div>       
//           </div>
//         );
//       }
//     }
    
// export default FiveDayWeather

import React from 'react'

function fiveDayWeather() {
  return (
    <div>
      
    </div>
  )
}

export default fiveDayWeather
