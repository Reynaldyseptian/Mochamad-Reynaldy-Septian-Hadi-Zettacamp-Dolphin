// Mid task of JavaScript. Will include all previous day's learning:
// Create a variable with type array of object to save song lists with song details
// Create a function to group song based on artists
// Create a function to group song based on genre
// Create a function to group song to play song less than 1 hour with random artists & genres

const songs = [
    {
        name: "33x",
        artist:"perunggu",
        album:"memorandum",
        genre:"pop",
        duration:7.5 // Minutes
    },
    {
        name: "ku bukan mesin lotremu",
        artist:"the jansen",
        album:"binal semakin binal",
        genre:"punk",
        duration:9 // Minutes
    },
    {
        name: "love will tear us apart",
        artist:"joy division",
        album:"closer",
        genre:"pop punk",
        duration:6.7 // Minutes
    },
    {
        name: "time bomb",
        artist:"rancid",
        album:"and out the wolves",
        genre:"punk",
        duration:4.7 // Minutes
    },
    {
        name: "prematur",
        artist:"perunggu",
        album:"memorandum",
        genre:"pop",
        duration:4.8 // Minutes
    },
    {
        name: "biang lara",
        artist:"perunggu",
        album:"memorandum",
        genre:"pop punk",
        duration:5.9 // Minutes
    },
    {
        name: "taring",
        artist:"seringai",
        album:"taring",
        genre:"rock",
        duration:4.7 // Minutes
    },
    {
        name: "berhenti di 15",
        artist:"seringai",
        album:"serigala militia",
        genre:"rock",
        duration:5.8 // Minutes
    },
    {
        name: "merenguk anti depresan lagi",
        artist:"the jansen",
        album:"binal semakin binal",
        genre:"punk",
        duration:5.3 // Minutes
    },
    {
        name: "fall back down",
        artist:"rancid",
        album:"indestructible",
        genre:"punk",
        duration:4.5 // Minutes
    },
    {
        name: "dilarang di Bandung",
        artist:"seringai",
        album:"taring",
        genre:"rock",
        duration:7.2 // Minutes
    },
    {
        name: "perlahan tenang",
        artist:"the paps",
        album:"hang loose baby",
        genre:"regae",
        duration:5.7 // Minutes
    },
    {
        name: "canggih",
        artist:"perunggu",
        album:"memorandum",
        genre:"pop punk",
        duration:6.6 // Minutes
    },
    {
        name: "sementara",
        artist:"the paps",
        album:"hang loose baby",
        genre:"regae",
        duration:3.6 // Minutes
    },
    {
        name: "langit tak seharusnya biru",
        artist:"the jansen",
        album:"binal semakin binal",
        genre:"pop punk",
        duration:5 // Minutes
    },
    {
        name: "menyala",
        artist:"perunggu",
        album:"memorandum",
        genre:"pop",
        duration:4.3 // Minutes
    },
]

// ////////////////////////////////////////////////////////////////////////

function groupSongsByArtist(songs) {
    const artistGroups = []; // [ [{},{},{}], [{},{},{}], [{},{},{}],]

    for (let i = 0; i < songs.length; i++) {
        let isArtistGrouped = false;

        // Cek apakah lagu sudah dikelompokkan dalam artistGroups
        for (let j = 0; j < artistGroups.length; j++) {
              //pengecekekan kesamaan artis dalam songs
            if (artistGroups[j][0].artist === songs[i].artist) {
                // push songs[i] kedalam [] artis group
                artistGroups[j].push(songs[i]);
                isArtistGrouped = true;
                break;
            }
        }

        // Jika belum dikelompokkan, buat grup baru
        if (!isArtistGrouped) {
            artistGroups.push([songs[i]]);
        }
    }

    return artistGroups;
}

const groupedSongs = groupSongsByArtist(songs);
// console.log(groupedSongs)
for(let i = 0 ; i < groupedSongs.length; i++){
console.log(groupedSongs[i][0].artist)
console.table(groupedSongs[i])
}

// ////////////////////////////////////////////////////////////////////

function groupSongsByGenre(songs) {
    const genreGroups = [];

    for (let i = 0; i < songs.length; i++) {
        let isGenreGrouped = false;

        for (let j = 0; j < genreGroups.length; j++) {
            if (genreGroups[j][0].genre === songs[i].genre) {
                genreGroups[j].push(songs[i]);
                isGenreGrouped = true;
                break;
            }
        }

        if (!isGenreGrouped) {
            genreGroups.push([songs[i]]);
        }
    }

    return genreGroups;
}

const groupedGenre = groupSongsByGenre(songs);
for(let i = 0 ; i < groupedGenre.length; i++){
console.log(groupedGenre[i][0].genre)
console.table(groupedGenre[i])
}

// ///////////////////////////////////////////////////////////////////////

function createPlaylist(songs) {
    const randomSet = [];
    const randomSetSixty = []

    for (let i = 0; i < songs.length; i++) {
        let randomNumber = Math.floor(Math.random() * songs.length);
        // console.log(randomNumber)
        randomSet.splice(randomNumber, 0, songs[i]);
    }

    let songsDuration = 0
    for(let i = 0 ; i < randomSet.length; i++ ){
        if(Math.ceil(songsDuration + randomSet[i+1].duration) > 60){
            break
        }

        randomSetSixty.push(randomSet[i])
        songsDuration += randomSet[i].duration
    }

    return randomSetSixty;
}

const playlist = createPlaylist(songs);
console.table(playlist);