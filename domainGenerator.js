function generateDomain(pronoun, adj, noun){
    var pronoun = ['the','our'];
    var adj = ['great', 'big' ];
    var noun = ['jogger','racoon'];
    var possibleDomains =[];
    for (i=0; i<pronoun.length; i++){
        for (j=0; j<adj.length; j++){
            for (k=0; k<noun.length; k++){
            possibleDomains.push(pronoun[i] + adj[j] + noun[k] + ".com");
            }
        }
    }
    return possibleDomains;
}
console.log(generateDomain());