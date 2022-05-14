let dt = [{
    name: "supermanu",
    species: "dog",
    favFoods: ["choclateroll", "lays"],
    birthYear: 2020,
    photo: ""

},
{
    name: "lio",
    species: "cat",
    favFoods: ["fish", "lays"],
    birthYear: 2020,
    photo: ""

    }
    ,
    {
        name: "tom",
        species: "rat",
        favFoods: ["fish", "lays"],
        birthYear: 2020,
        photo: ""
    
    }


]

/*  templyfy is kind of worlds smallest templating engine that takes 
id of example elements , and data to be rendered and renders data 
 */ 

function templify(id, data) {
    
    let element = document.querySelector(id);
    let re = /\([a-z]*\)/ig;
    let template = element.innerHTML
    let matches = template.match(re)
    let tempCopy = ''
    let replacement
    let finaltext =''

    for (let i = 0; i < data.length; i++){

        let currentdata = data[i]

        
        for (let j = 0; j < matches.length; j++){

            let curMatch = matches[j]

            replacement = curMatch.slice(1, curMatch.length - 1)
            if (j == 0) {
                tempCopy = template.replace(curMatch, currentdata[replacement])
            } else {
                tempCopy = tempCopy.replace(curMatch, currentdata[replacement])
            }
           
        }
        finaltext += tempCopy
    }

    document.querySelector(id).innerHTML = finaltext



}


templify('#temp',dt)