
// Loading JSON Data Using AJAX

let but = document.getElementById("load")
    .addEventListener("click", function (e) {
    


        //Creating XHR object
        xhr = new XMLHttpRequest()
        //making request req type , data url ,synchronouus or not
        xhr.open('GET', "data.json", true)
        
        xhr.onload = function () {
            if (this.status == 200) {

                console.log("loaded")

                
                // console.log(this.responseText)
                let data = JSON.parse(this.responseText)

                let output = ''
                let div = document.getElementById("users")

                for (let i = 0; i < data.length; i++){
                    output = `
                    <h3> User :${data[i].username} </h3>
                    <h4> Alter Ego :${data[i].alterego} </h4>
                    <h4> City :${data[i].city} </h4>
                     
                    `
                    div.innerHTML+= output

                }
            }
        }
        

        xhr.onprogress = function () {
            console.log("loading")
        }

        xhr.onerror = function () {
            console.log("something went wrong")
            
        }

        xhr.send()



    })


    