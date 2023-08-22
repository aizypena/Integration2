document.addEventListener("DOMContentLoaded", () => {
    const lyricsBtn = document.getElementById("lyrics-btn");
    const lyricsContent = document.getElementById("lyrics-content");

    lyricsBtn.addEventListener("click", () => {
        const options = {
            method: "GET",
            url: "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/",
            params: { id: "7076626" },
            headers: {
                "X-RapidAPI-Key":
                    "89ab35c67cmsh31e067e9058032cp120665jsndfe0a339bf92",
                "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then((response) => {
                const lyricsHtml = response.data.lyrics.lyrics.body.html || "";
                lyricsContent.innerHTML = lyricsHtml;
            })
            .catch((error) => {
                console.error("Error fetching lyrics:", error);
            });
    });
});

// other albums API
document.addEventListener("DOMContentLoaded", () => {
    const albumsBtn = document.getElementById("albums-btn");
    const lyricsContent = document.getElementById("lyrics-content");

    albumsBtn.addEventListener("click", async () => {
        try {
            const options = {
                method: "GET",
                url: "https://spotify23.p.rapidapi.com/albums/",
                params: {
                    ids: "5AEDGbliTTfjOB8TSm1sxt,151w1FgRZfnKZA9FEcg9Z3,1NAmidJlEaVgA3MpcPFYGq,6kZ42qRrzov54LcAk4onW9",
                },
                headers: {
                    "X-RapidAPI-Key":
                        "89ab35c67cmsh31e067e9058032cp120665jsndfe0a339bf92",
                    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
                },
            };

            const response = await axios.request(options);
            const albums = response.data.albums;

            let albumsHTML = "";
            albums.forEach((album) => {
                albumsHTML += `<div class="album">
                    <img src="${album.images[0].url}" alt="${album.name} Album Art">
                    <p>${album.name}</p>
                    <p>${album.release_date}</p>
                </div>`;
            });

            lyricsContent.innerHTML = albumsHTML;
        } catch (error) {
            console.error("Error fetching albums:", error);
            lyricsContent.innerHTML = "Error fetching albums.";
        }
    });
});

//related artists
document.addEventListener("DOMContentLoaded", () => {
    const albumsBtn = document.getElementById("albums-btn");
    const relatedArtistsBtn = document.getElementById("related-artists-btn");
    const lyricsContent = document.getElementById("lyrics-content");
    const albumsContent = document.getElementById("albums-content");

    albumsBtn.addEventListener("click", async () => {
        try {
            const options = {
                method: "GET",
                url: "https://spotify23.p.rapidapi.com/artist_related/",
                params: {
                    id: "06HL4z0CvFAxyc27GXpf02",
                },
                headers: {
                    "X-RapidAPI-Key":
                        "89ab35c67cmsh31e067e9058032cp120665jsndfe0a339bf92",
                    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
                },
            };

            const response = await axios.request(options);
            const albums = response.data.albums;

            let albumsHTML = "";
            albums.forEach((album) => {
                albumsHTML += `<div class="album">
                    <img src="${album.images[0].url}" alt="${album.name} Album Art">
                    <p>${album.name}</p>
                    <p>${album.release_date}</p>
                </div>`;
            });

            lyricsContent.textContent = "";
            albumsContent.innerHTML = albumsHTML;
        } catch (error) {
            console.error("Error fetching albums:", error);
            albumsContent.innerHTML = "Error fetching albums.";
        }
    });

    relatedArtistsBtn.addEventListener("click", async () => {
        try {
            const options = {
                method: "GET",
                url: "https://spotify23.p.rapidapi.com/artist_related/",
                params: {
                    id: "06HL4z0CvFAxyc27GXpf02",
                },
                headers: {
                    "X-RapidAPI-Key":
                        "89ab35c67cmsh31e067e9058032cp120665jsndfe0a339bf92",
                    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
                },
            };

            const response = await axios.request(options);
            const relatedArtists = response.data.related_artists;

            let artistsHTML = "";
            relatedArtists.forEach((artist) => {
                artistsHTML += `<div class="artist">
                    <img src="${artist.image_url}" alt="${artist.name} Image">
                    <p>${artist.name}</p>
                </div>`;
            });

            lyricsContent.textContent = "";
            albumsContent.innerHTML = artistsHTML;
        } catch (error) {
            console.error("Error fetching related artists:", error);
            albumsContent.innerHTML = "Error fetching related artists.";
        }
    });
});
