const getlocation = function (lattitude, longitude) {
  fetch(`https://geocode.xyz/${lattitude},${longitude}?geoit=json`)
    .then((respose) => respose.json())
    .then((data) => {
      console.log(data);
      console.log(
        ` the country name is ${data.country} and city  is  ${data.city}`
      );
    });
};
getlocation(27.7172, 85.324);
