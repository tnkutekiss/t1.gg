import React, { useContext, useState } from "react"
import { Songs } from "../Context"

export default function Content() {
    const {song} = useContext(Songs)
    return (
        <div className="col-span-1 h-screen-navbar-player">
            <h2 className="text-cyan-500 font-bold text-4xl">
                Now Playing
            </h2>
            <h1 className="text-gray-500 text-4xl">
                {song.name}
            </h1>
            <div className="w-[200px] m-auto mt-3">
                <img src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center m-auto mt-3">
            <img className="w-[70px] rounded-full" src={song.links.images[0].url} alt="avatar" />
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    )
}