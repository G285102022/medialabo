let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log("緯度："+data.coord.lon );
console.log("経度："+data.coord.lat );
console.log("天気："+data.weather[0].description );
console.log("最低気温："+data.main.temp_min );
console.log("湿度："+data.main.humidity );
console.log("風速："+data.wind.speed );
console.log("風向："+data.wind.deg );
console.log("都市名："+data.name );

//課題4-2
div = document.querySelector('div#result');
ul = document.createElement('ul');
li = document.createElement('li');
li.textContent = '緯度：'+data.coord.lon;
//divの中にli,liの中にp
ul.insertAdjacentElement('beforeend', li);
div.insertAdjacentElement('beforeend', ul);

//pの後ろにp2,p3,p4...
li2 = document.createElement('li');
li2.textContent = '経度：'+data.coord.lat;
ul.insertAdjacentElement('beforeend', li2);

li3 = document.createElement('li');
li3.textContent = '天気：'+data.weather[0].description;
ul.insertAdjacentElement('beforeend', li3);

li4 = document.createElement('li');
li4.textContent = '最低気温：'+data.main.temp_min;
ul.insertAdjacentElement('beforeend', li4);

li5 = document.createElement('li');
li5.textContent = '湿度：'+data.main.humidity;
ul.insertAdjacentElement('beforeend', li5);

li6 = document.createElement('li');
li6.textContent = '風速：'+data.wind.speed;
ul.insertAdjacentElement('beforeend', li6);

li7 = document.createElement('li');
li7.textContent = '風向：'+data.wind.deg;
ul.insertAdjacentElement('beforeend', li7);

li8 = document.createElement('li');
li8.textContent = '都市名：'+data.name ;
ul.insertAdjacentElement('beforeend', li8);

