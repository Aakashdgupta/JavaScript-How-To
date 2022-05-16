let sorted = [];
var datad = [];

let div = document.getElementById("questions");
let out = "";

fetch("data.json")
  .then((resp) => resp.json())

  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      datad.push(data[i]);
      out = `
          <h1 id="${i}"class="data-item"> Question ${i} : ${data[i].question}
          `;
      div.innerHTML += out;
    }
    return data;
  })


  .finally((data) => {
    console.log(datad[0].name);
    console.log(sorted);

    let el = document.querySelectorAll(".data-item");
    for (var n = 0; n < el.length; n++) {
      // console.log(el[n])

      el[n].addEventListener("click", function (e) {
        // console.log(datad[e.target.id])
        let x = e.target.id;

        let contains = false;

        if (sorted.length != 0) {
          for (let i = 0; i < sorted.length; i++) {
            if (sorted[i].question === datad[x].question) {
              contains = true;
              sorted.pop(sorted[i]);
              console.log(datatoreturn(sorted));
              break;
            }
          }
        }

        //if not contains
        if (contains == false) {
          sorted.push(datad[x]);
          console.log(datatoreturn(sorted));
        }
      });
    }
  });

//Convert to json

function datatoreturn(dataarray) {
  return JSON.stringify(dataarray);
}
