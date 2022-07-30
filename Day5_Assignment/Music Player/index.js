// project js 

let musics=[

    {
        id:1,
        name:"Ajj Din Chadheya",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Ajj Din Chadheya.mp3",
        imageSrc:"images/ajj din chadheya.jpeg"
    },
    {
        id:2,
        name:"Dil Meri Na sune",
        artist:"Atif Aslam",
        audioSrc:"audios/Dil Meri Na Sune.mp3",
        imageSrc:"images/dil meri na sune.jpeg"
    },
    {
        id:3,
        name:"Humdard",
        artist:"Arijit Singh",
        audioSrc:"audios/Humdard.mp3",
        imageSrc:"images/humdard.jpeg"
    },
    {
        id:4,
        name:"Lag Ja Gale",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Lag Ja Gale.mp3",
        imageSrc:"images/lag ja gale.jpg"
    },
    {
        id:5,
        name:"Tera Fitoor",
        artist:"Arijit Singh",
        audioSrc:"audios/Tera Fitoor.mp3",
        imageSrc:"images/tera fitoor.jpeg"
    }
]


for(let i=0;i<musics.length;i++)
{

    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");


    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });

    document.querySelector(".music-list").append(tile);

}


function playMusic(music)
{

    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    document.querySelector(".audio").play();

}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}