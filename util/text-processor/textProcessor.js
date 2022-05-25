
//Utility functions
function contains(arr, item) {
  for (let i = 0; i < arr.length; i++){
      if(arr[i].word === item){
          return {contains:true,at:i}
      }
  }
  return {contains:false,at:null}
}



class TextProcessor{
  constructor() {
    this.interactorCallback = null
  }


  static wordcounter(data) {
    let counts = {};
      let words = [];
    let tokens = data.split(/\W+/);
  
  
    for (let i = 0; i < tokens.length; i++) {
        let test = contains(words, tokens[i])
        let con = test.contains
        let at = test.at
  
      //   console.log(` words contains ${tokens[i]} : ${con} at ${at} `)
        
       if(con) {
        words[at].count += 1;
      } else {
        let word = { word: tokens[i], count: 1 };
        words.push(word);
      }
    }
  
   words = words.sort((a, b) => {
          if (a.count < b.count) { return 1 }
          else{return -1}
      
  })
      
  //   console.log(words);
      return words
  
  
  }

  static wordInteractor(text, ele, interactorCallback) {
    this.interactorCallback = interactorCallback
    


    let reg = /(\w+)/
    let data = []
    ele.innerHTML =''
    data = text.split(reg)
    // console.log(data)
    data.map((word) => {
      let span = document.createElement("span")
      span.innerHTML = word;
      span.className = "word";

      ele.appendChild(span)

    })
  }
  
}



//Event listeners 
document.addEventListener("click", (e) => {
  word = e.target
  if (TextProcessor.interactorCallback) {
    if (e.target.className === "word") {
        TextProcessor.interactorCallback(word)
    }

  }
  
})



