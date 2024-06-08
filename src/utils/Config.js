// Config.js

// NoImage.js
import React from 'react';
import noImg from '../Images/NoImage.webp';
import profile from '../Images/defaultProfile.png'
export function NoImage() {
  return (
    <div className="flex items-center justify-center object-cover rounded-2xl p-2 opacity-20">
      <img src={noImg} alt="NoImage" />
    </div>
  );
}
export const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
export const MOVIE_BACKDROP_IMG = "https://image.tmdb.org/t/p/original";
export const MOVIE_POSTER_IMG = "https://image.tmdb.org/t/p/w500/";


export function Profile({ width = "w-24", ml = "ml-28" }) {
  return <img src={profile} className={`xl:${ml} ${width}`} alt="logo" />;
}