import React, { useContext, useEffect, useState } from "react"
import { Songs } from "../Context"

export default function Listsong() {
    const {DataSongs, handleSetSong, song} = useContext(Songs);
    const [idSong, setIdSong] = useState(0);
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    };
    useEffect(() => {
        setIdSong(song.id)
    }, [song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white text-bold ">
                    <tr>
                        <th>#</th>
                        <th className="text-center">Title</th>
                        <th className="text-center">Author</th>
                        <th><i className="fa fa-download" aria-hidden="true"></i></th>
                    </tr>
                </thead>
                <tbody className=" text-xl">
                {DataSongs.map((song, index) => (
                        <tr key={index} className={`text-gray-500 bg-slate-700 h-12 hover:bg-gray-600 hover:text-gray-800 
                        ${idSong === song.id && 'text-teal-400'}`}
                        onClick={() => handlePlaySong(song.id)}>
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center"> <a href={song.url}>
                                <i class="fa fa-download" aria-hidden="true"></i>
                            </a></td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}
