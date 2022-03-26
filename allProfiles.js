import chat from './src/components/chat.js';
import profile from './src/components/profile.js'
import HashTable from './Hashtable.js'
let allProfiles = new HashTable();
let matches = new HashTable();


function createProfile(name, desc, type, gear){
    let prof = new profile(name, desc, type, gear);
    allProfiles.add(name, prof);
    return prof;
}

//for when p1 likes p2
function addLike(p1, p2) {
    if (!p2.likes.includes(p1.name)){
        p2.likes.push(p1.name);   
    }
    if (p1.likes.includes(p2.name)) {
        createMatch(p1, p2);
        console.log("created match");
    }
}

function createMatch(p1, p2) {
    p1.matchList.push(p2);
    p2.matchList.push(p1);
    let chatlog = new chat();
    matches.add(getMatchId(p1, p2), chatlog);
}

function message(p1, p2, message) {
    let matchID = getMatchId(p1, p2)
    let chat = matches.search(matchID);
    if (chat != null) {
        chat.sendMessage(message, p1);
        matches.add(matchID, chat);
    }
}



 function getMatchId(p1, p2){
    let str = p1.name + p2.name;
    let n = str.length
    let sum = 0;

    // For every character
    for (let i = 0; i < n; i++) {

        // If current position is prime
        // then add the ASCII value of the
        // character at the current position
        sum += str.charCodeAt(i);
    }

    return sum;

 }

let pf1 = createProfile("Timothy", "This is my desc Tim", "Photographer");
let pf2 = createProfile("Pat", "This is my desc Pat", "Model");
addLike(pf1, pf2);
addLike(pf2,pf1);
message(pf1, pf2, "hello there");
message(pf2, pf1, "hows it going?");
console.log(getMatchId(pf1, pf2));
console.log(getMatchId(pf2, pf1));
console.log(matches.search(getMatchId(pf1, pf2)));