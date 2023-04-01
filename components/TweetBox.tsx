import React, {useState} from "react";
import {
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

const Tweetbox = () => {
   const [input, setInput] = useState<string>('')
   const{ data : session } = useSession()
   const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
   

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt="/"
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input value={input} onChange={(e) =>setInput(e.target.value)} className="h-24 w-full text-xl outline-none placeholder:text-xl" type="text" placeholder="What's happening?" />
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1">
              {/* Icons */}
              <PhotographIcon onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)} className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 hover:cursor-pointer transition-transform duration-150 ease out hover:scale-150" />
            </div>
            <button disabled={!input || !session} className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40">Tweet</button>
          </div>
          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              <input className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white" type='text'
              placeholder="Enter Image URL..."/>
              <button className="font-bold text-white">Add Image</button>
        </form>
        )}
        </form>
      </div>
    </div>
  );
};

export default Tweetbox;
