import React, { useEffect, useState } from "react";
import { Tweet, Comment } from "../typings";
import Timeago from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utlis/fetchComments";
import { useSession } from "next-auth/react";

interface Props {
  tweet: Tweet;
}

function TweetComponent({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentsBoxIsVisible, setCommentsBoxIsVisible] =
    useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const {data: session} = useSession()

  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComments();
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
  }

  console.log(comments);

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-200">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLowerCase()}
            </p>

            <Timeago
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>

          <p className="pt-1">{tweet.text}</p>

          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-xl"
            />
          )}
        </div>
      </div>
      <div className="flex mt-5 justify-between">
        <div
          onClick={() => session && setCommentsBoxIsVisible(!commentsBoxIsVisible)}
          className=" flex cursor-pointer items-center text-gray-400 space-x-3"
        >
          <ChatAlt2Icon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>

        <div className="flex cursor-pointer items-center text-gray-400  space-x-3">
          <SwitchHorizontalIcon className="h-5 w-5" />
        </div>

        <div className="flex cursor-pointer items-center text-gray-400  space-x-3">
          <HeartIcon className="h-5 w-5" />
        </div>

        <div className="flex cursor-pointer items-center text-gray-400  space-x-3">
          <UploadIcon className="h-5 w-5" />
        </div> 
      </div>

      {/* Comments Logic */}

      {commentsBoxIsVisible && (
        <form  onSubmit={submitHandler}  className="mt-3 flex space-x-3 ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg bg-gray-200 p-2 outline-none"
            type="text"
            placeholder="Write a comment..."
          />
          <button disabled={!input}className="text-twitter disable:text-gray-200">Post</button>
        </form>
      )}

      {comments?.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-200 p-5">
          {comments.map((comment) => (
            <div key={comment._id} className="relative   flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
              <img
                src={comment.profileImg}
                className="h-7 mt-2 w-7 object-cover rounded-full "
                alt=""
              />
              <div>
                <div className="flex items-center space-x-1 ">
                  <p className="mr-1 font-bold">{comment.username}</p>
                  <p className="hidden  text-sm text-gray-500 lg:inline">
                    {comment.username.replace(/\s+/g, "").toLowerCase()}·
                  </p>

                  <Timeago
                    className="text-sm text-gray-500"
                    date={comment._createdAt}
                  />
                </div>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TweetComponent;
