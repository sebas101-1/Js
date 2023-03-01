// import {createRoot} from "react-dom/client";
let sizest = "";
let inc = 0.1;
let size = 30;
let mar = 0;
function Mover(){
    // alert("Hover !!!");
    album = document.getElementById("bs");
    while(size<=35){
        size+=inc;
        sizest = String(size)+"%";
        mar = String((100-size)/2)+"%";
        album.style.width = sizest;
        album.style.height = sizest;
        album.style.margin = mar;
        album.style.borderRadius = String(size/20)+"%";
        // alert(sizest)
    }
    size = 30;
    cap = document.getElementById("bs2");
    cap.innerHTML = "Born Sinner is an album by American rapper J. Cole that was released in 2013. The album’s title and theme are influenced by The Notorious B.I.G.'s song “Juicy” where he raps born sinner, the opposite of a winner. The album explores J. Cole’s struggles with fame, temptation, sin and redemption"
    cap.style.textSize = "20px"
    cap.style.textAlign = "center";
}
function Mout(){
    // alert("Hover !!!");
    album = document.getElementById("bs");
    album.style.width = "30%";
    album.style.height = "30%";
    album.style.margin = "35%"
    cap = document.getElementById("bs2");
    cap.innerHTML = "";
    album.style.borderRadius = "0%";
}
function MoverLow(){
    // alert("Hover !!!");
    album = document.getElementById("low");
    while(size<=35){
        size+=inc;
        sizest = String(size)+"%";
        mar = String((100-size)/2)+"%";
        album.style.width = sizest;
        album.style.height = sizest;
        album.style.margin = mar;
        album.style.borderRadius = String(size/20)+"%";
        // alert(sizest)
    }
    alert("j")
    size = 30;
    cap = document.getElementById("low2");
    cap.innerHTML = "The Low End Theory is the second studio album by American hip hop group A Tribe Called Quest. It was released on September 24, 1991, by Jive Records. The album was one of the first records to fuse hip hop with jazz, particularly bebop and hard bop32. The album’s minimalist sound is “stripped to the essentials: vocals, drums, and bass.” The bass drum and vocals emphasize the downbeat on every song3. The album’s title referred to both the status of black men in society and bass frequencies in the music"
    cap.style.textSize = "20px"
    cap.style.textAlign = "center";
}
function MoutLow(){
    // alert("Hover !!!");
    album = document.getElementById("low");
    album.style.width = "30%";
    album.style.height = "30%";
    album.style.margin = "35%"
    cap = document.getElementById("low2");
    cap.innerHTML = "";
    album.style.borderRadius = "0%";
}
