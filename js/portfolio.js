const info = document.createElement("infoText");
const showcase = document.getElementById("showcaseBox")

function changeTopic(id) {
    changeInfoContents(id)
    document.getElementById("infoBox").prepend(info);
    changeShowcaseCategory(id)
    
}

function changeInfoContents(id) {
    if (id == 0) { 
        info.textContent = 
        "naotol is a self-taught artist (that does pixel art more) who enjoys seeing his imaginary world through the form of his drawings. Began drawing since 2021, he started building his own \"Kingdom of my Subconsciousness\" (which was implemented into \"Otherworldly!\" in 2026) on his iPad, worksheets, notes and textbooks everytime he get bored at class, and that is how he knows to draw better. Pixel art and animation on the other hand, is an entire different story, naotol was fascinated to the aesthetics of retro games that has pixel graphics that he played in 2024 (PSI animations in EarthBound and the game itself to be specific). Excited, naotol began creating fanmade PSI animations with Krita and subsequently Aseprite. But then he got bored a while later, and decided to try animating something else. And this is how naotol got into pixel art animation. Yes, he makes pixel art animations of characters and special effects!"
        
    }
    else if (id == 1) { 
        info.textContent =
        "naotol is a self-taught game composer that marvels to other piece of music that inspired him. Although he mostly makes chiptune-like music as Keygen music inspired him the most, it doesn't mean his work is limited to chiptune music. Began making \"shitty\" remakes of popular game music in Medly since 2020 and is progressively getting better in 2021, created his own first track \"vapor\" in 2023 with FL Studio. Then in 2024 where naotol wants to make his \"Kingdom of my Subconsciousness\" like a real game, he began writing more songs for that on Medly (which was mostly scrapped) and FL Studio."
    }
    else if (id == 2) { 
        info.textContent = "naotol began coding in 2018, Lua was his first language, he learned the basics of a script by carefully inspecting the functions of each line. Then he tried to build some programs with those lines, and made some scripts based on what he has learned. Then, naotol learned Python from his high school and tried to translate his programs to Python, thus Python became his second language. In college, he has to build a website portfolio as an assignment. Although his professor allowed easy drag-and-click tools like Carrd or Strawpage, naotol didn't opt for any of them. Inversely, he would rather spend more time learning HTML and CSS in order to build his website from scratch. But for JavaScript, which was a family of C, he wasn't familiar with it's syntax, therefore he had to learn JS by watching tutorials on YouTube. And there you have it, this website ITSELF perfectly matches the description from above. Last but not least, naotol is developing his platformer-RPG game \"Otherworldly!\" solo on Godot!"
    }
}

function changeShowcaseCategory(id) {
    if (id == 0) {
        document.getElementById("showcaseBox").innerHTML="<div><img src='./img/show1.png' class='showcase'><img src='./img/show2.gif'class='showcase'></div><div><video src='./img/show3.mp4' class='showcase' controls></video><img src='./img/show4.gif'class='showcase'></div><div><img src='img/show5.png' class='showcase'><img src='img/show6.png' class='showcase'></div>"
    }
    else if (id == 1) {
        document.getElementById("showcaseBox").innerHTML="<div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>Take a Break</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act I</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/safe_zone.wav' controls></audio></div></div><div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>Capitalism Owns</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act I</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/shop.wav' controls></audio></div></div><div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>Showdown!</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act II</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/showdown.wav' controls></audio></div></div><div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>The Cruise</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act I</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/the_cruise.wav' controls></audio></div></div><div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>Shantaro Town</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act I</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/hometown.wav' controls></audio></div></div><div id='mp3playerthingy'><div id='album'><img src='./img/album-export.png' style='width: 300px'></div><div id='songdetail'><div>Normal Battle</div><div style='font-size: 30px; padding-top: 10px;'>Otherworldly!: Act I</div><div style='font-size: 30px; padding-top: 10px; padding-bottom: 50px;'>naotol</div><audio src='./audio/norm_battle.wav' controls></audio></div></div>"
    }
    else {
        document.getElementById("showcaseBox").innerHTML="<div style='margin-top: 20px;font-size: 40px'>This website itself and the \"Otherworldly\" game are the showcase!</div>"
    }
}
