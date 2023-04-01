import React from "react";

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  MailIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import {useSession, signOut, signIn} from 'next-auth/react'

import SidebarRow from "./SidebarRow";

const Sidebar = () => {
 const{ data : session } = useSession()

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt="/"
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={MailIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={CollectionIcon} title="Lists" />
      <SidebarRow Icon={UserIcon} onClick={session ? signOut : signIn } title={session ? 'Sign Out' : 'Sing In'} />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title="More"/>
    </div>
  );
};

export default Sidebar;
