import React from "react";
import {
  SearchCircleIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";

const Tweetbox = () => {
  return (
    <div>
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src="https://links.papareact.com/gll"
        alt="/"
      />

      <div>
        <form>
          <input type="text" placeholder="What's happening?" />
          <div>
            <div className="flex space-x-2 text-twitter">
              {/* Icons */}
              <PhotographIcon className="h-5 w-5" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button>Tweet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tweetbox;
