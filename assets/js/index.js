const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: "2",
    m: "170",
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el océano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: "2",
    m: "130",
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: "1",
    m: "80",
  },
  {
    name: "Casa rodante",
    description: "Conviértete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: "1",
    m: "6",
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: "3",
    m: "200",
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://media.bizj.us/view/img/12499454/back-of-the-house*1200xx4912-4912-1224-0.jpg",
    rooms: "5",
    m: "500",
  },
];

const button = document.querySelector(".btn");
const container = document.querySelector(".propiedades");
const totalElements = document.getElementById("Elements");
const roomInput = document.querySelector(".rooms");
const minMetersInput = document.getElementById("minMeters");
const maxMetersInput = document.getElementById("maxMeters");

function renderProperty(property) {
  return `
    <div class="propiedad">
      <div class="img" style="background-image: url(${property.src});"></div>
      <section class="property-details">
        <h3>${property.name}</h3>
        <div class="property-info">
          <p>Piezas: ${property.rooms}</p>
          <p>Metros Cuadrados: ${property.m}</p>
        </div>
        <p class="property-description">${property.description}</p>
        <button class="custom-btn">Ver más</button>
      </section>
    </div>`;
}

function displayAll() {
  for (let property of propiedadesJSON) {
    container.innerHTML += renderProperty(property);
    totalElements.innerHTML = propiedadesJSON.length;
  }
}

function displayRooms() {
  let count = 0;

  if (
    roomInput.value === "" ||
    minMetersInput.value === "" ||
    maxMetersInput.value === ""
  ) {
    alert("Por favor llena todos los campos.");
  } else if (
    parseInt(roomInput.value) > 0 &&
    parseInt(minMetersInput.value) >= 0 &&
    parseInt(maxMetersInput.value) >= parseInt(minMetersInput.value)
  ) {
    container.innerHTML = "";
    totalElements.innerHTML = "";

    for (let property of propiedadesJSON) {
      if (
        parseInt(property.rooms) >= parseInt(roomInput.value) &&
        parseInt(property.m) >= parseInt(minMetersInput.value) &&
        parseInt(property.m) <= parseInt(maxMetersInput.value)
      ) {
        container.innerHTML += renderProperty(property);
        count++;
      }
      totalElements.innerHTML = count;
    }
  }
}

button.addEventListener("click", displayRooms);

displayAll();