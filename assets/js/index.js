function buttonClick() {
   window.event.preventDefault()
   let price = Number(document.getElementById("price").value);
   let option = Number(document.querySelector("select[name='service-quality']").value);
   let howManyPeople = Number(document.querySelector("input[name='people']").value);
   let acountDivision = (price+(price * option))/ howManyPeople;
   alert(acountDivision)
}
const clickButton = document.querySelector("form");
clickButton.addEventListener("submit", buttonClick);





