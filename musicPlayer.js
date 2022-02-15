var songs=[

    {
        id:1,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au1.mp3(getmp3.pro).mp3",
        title:"Believe - NEFFEX"
    },

    {
        id:2,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au1.mp3(getmp3.pro).mp3",
        title:"Bite Me - NEFFEX"
    },

    {
        id:3,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au3.mp3(getmp3.pro).mp3",
        title:"Born a Rockstar - NEFFEX"
    },

    {
        id:4,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au4.mp3(getmp3.pro).mp3",
        title:"By the Fireplace - TrackTribe"
    },

    {
        id:5,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au5.mp3(getmp3.pro).mp3",
        title:"Don't Wanna Let Myself Down - NEFFEX"
    },

    {
        id:6,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au6.mp3(getmp3.pro).mp3",
        title:"How's It Supposed to Feel - NEFFEX"
    },

    {
        id:7,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au7.mp3(getmp3.pro) (1).mp3",
        title:"Modern Attempt - TrackTribe"
    },

    {
        id:8,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au8.mp3(getmp3.pro).mp3",
        title:"Smoke Jacket Blues - TrackTribe"
    },

    {
        id:9,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au9.mp3(getmp3.pro).mp3",
        title:"The Itch - NEFFEX"
    },

    {
        id:10,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au10.mp3(getmp3.pro).mp3",
        title:"This is Not a Christmas Song - NEFFEX"
    },

    {
        id:11,
        imageSrc:"./thumbnails/imge.jfif",
        audioSrc:"./audio/au11.mp3(getmp3.pro).mp3",
        title:"Till I Let Go - NEFFEX"
    },


]

function generateAudioCards()
{

    let htmlString="";

    songs.forEach(function(song,index){

        let songHTML=`

                <div class="audio">
                <div class="audio_img">
                    <img src="${song.imageSrc}">
                </div>
                <div class="audio_detail">
                    <h1 class="audio_title">${song.title}</h1>
                    <button class="btn" onclick="playAudio(${song.id})">Play</button>
                </div>
                </div>

        `;

        htmlString+=songHTML;

    })

    document.getElementById("audios").innerHTML=htmlString;


}

generateAudioCards();


function playAudio(songid)
{
    var song=songs.find(function(song,index){
        return song.id===songid
    });

    document.getElementById("thumbnail").src=song.imageSrc;
    document.getElementById("audio_player").src=song.audioSrc;
    document.getElementById("audio_player_title").innerText = song.title;
    document.getElementById("audio_player").play();

    
}
