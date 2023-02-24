let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  
  for (let value of pronoun) {
    let element = value;
    
    for (let anidado of adj ){
        let unity= element + anidado;
        for (let cost of noun ){
        let final= unity +cost;
        console.log(final + ".com")
        console.log(final + ".net")
        console.log(final + ".us")
        console.log(final + ".io")    
     
            


        }
    }
  }

