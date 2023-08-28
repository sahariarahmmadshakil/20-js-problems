function welcome(country, name) {
    country(name)
}
function country(countryName) {
    console.log('Welcom to ', countryName);
}
function village(vill) {
    console.log("village is", vill)
}
welcome(village, "Bangladesh");
