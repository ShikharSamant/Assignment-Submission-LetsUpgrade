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
        name:"Bad Liar",
        artist:"Imagine Dragons",
        audioSrc:"audios/Bad Liar.mp3",
        imageSrc:"images/bad liar.jpg"
    },
    {
        id:3,
        name:"Blank Space",
        artist:"Taylor Swift",
        audioSrc:"audios/Blank Space.mp3",
        imageSrc:"images/blank space.jpg"
    },
    {
        id:4,
        name:"Cold Play",
        artist:"Chris Martin",
        audioSrc:"audios/ColdPlay.mp3",
        imageSrc:"images/cold play.jpg"
    },
    {
        id:5,
        name:"Dil Meri Na sune",
        artist:"Atif Aslam",
        audioSrc:"audios/Dil Meri Na Sune.mp3",
        imageSrc:"images/dil meri na sune.jpeg"
    },
    {
        id:6,
        name:"Humdard",
        artist:"Arijit Singh",
        audioSrc:"audios/Humdard.mp3",
        imageSrc:"images/humdard.jpeg"
    },
    {
        id:7,
        name:"Ishq Bhi Kiya Re Maula",
        artist:"Ali Azmat",
        audioSrc:"audios/Ishq Bhi Kiya Re Maula.mp3",
        imageSrc:"images/ishq bhi kiya.jpg"
    },
    {
        id:8,
        name:"Kyu Mai Jaagoon",
        artist:"Shafqat Amanat Ali",
        audioSrc:"audios/Kyun Main Jaagoon.mp3",
        imageSrc:"images/kyun mai jagoon.jpg"
    },
    {
        id:9,
        name:"Lag Ja Gale",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Lag Ja Gale.mp3",
        imageSrc:"images/lag ja gale.jpg"
    },
    {
        id:10,
        name:"Mai Jaha Rahoon",
        artist:"Rahat Fateh Ali Khan",
        audioSrc:"audios/Main Jahaan Rahoon.mp3",
        imageSrc:"images/mai jaha rahoon.jpeg"
    },
    {
        id:11,
        name:"Namo Namo",
        artist:"Amit Trivedi",
        audioSrc:"audios/Namo Namo.mp3",
        imageSrc:"images/namo namo.jpeg"
    },
    {
        id:12,
        name:"Sugar",
        artist:"Imagine Dragons",
        audioSrc:"audios/Sugar.mp3",
        imageSrc:"images/sugar.jpg"
    },
    {
        id:13,
        name:"Tera Fitoor",
        artist:"Arijit Singh",
        audioSrc:"audios/Tera Fitoor.mp3",
        imageSrc:"images/tera fitoor.jpeg"
    },
    {
        id:14,
        name:"Yaar Ni Mileya",
        artist:"Hardy Sandhu",
        audioSrc:"audios/Yaarr Ni Milyaa.mp3",
        imageSrc:"images/yaar ni milya.webp"   
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