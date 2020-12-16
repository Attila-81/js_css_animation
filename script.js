function pageLoad() {
  let myObjects = [
    {
      tag: "h1",
      content: "Attila",
    },
    {
      tag: "p",
      content: "Frontend developer",
    },
  ];
  //console.log(myObjects);

  //for (let i = 0; i < myObjects.length; i++) {}

  let rootE = document.getElementById("root");
  for (myObject of myObjects) {
    rootE.insertAdjacentHTML(
      `beforeend`,
      `<${myObject.tag}>${myObject.content}</${myObject.tag}>`
    );
  }

  rootE.addEventListener("click", function () {
    rootE.classList.toggle("clicked");
  });
}
window.addEventListener("load", pageLoad);
