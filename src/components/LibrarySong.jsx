import React from 'react'

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    const handleSongSelect = () => {
        const selectedSong = songs.filter((state) => state.id === id);
        setCurrentSong(selectedSong[0]);

        // add active state 
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song, active: true,
                }
            } else {
                return {
                    ...song, active: false,
                }
            }
        })
        setSongs(newSongs)

        // check if the song is playing 
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }

    return (
        <div onClick={handleSongSelect} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong