const loadStorage = () => {
  const product = document.getElementById("input-1").value;
  const quantity = document.getElementById("input-2").value;
  liIt(product, quantity);
  saveDataInLocalStorage(product, quantity);
};

const liIt = (product, quantity) => {
  const dataZ = document.getElementById("lit");
  const li = document.createElement("li");
  li.innerText = `${product}${quantity}`;
  dataZ.appendChild(li);
};

const saveDataInLocalStorage = (product, quantity) => {
  const card = getItemFormLocalStorage();
  card[product] = quantity;
  // console.log(card);
  const appendDataINLocal = JSON.stringify(card);
  localStorage.setItem("card", appendDataINLocal);
};

const getItemFormLocalStorage = () => {
  let card = {};
  const dataIs = localStorage.getItem("card");
  if (dataIs) {
    card = JSON.parse(dataIs);
  }
  return card;
};
const displayDataFromLocalStorage = () => {
  const dataIt = getItemFormLocalStorage();
  // const parse = JSON.parse(dataIt);
  for (let product in dataIt) {
    console.log(product);
    const quantity = dataIt[product];
    liIt(product, quantity);
  }
};

displayDataFromLocalStorage();
// getItemFormLocalStorage();
loadStorage();
