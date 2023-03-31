import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { Tweet } from '../typings'
import Tweetbox from './TweetBox'
import TweetComponent from './TweetComponent'

interface Props {
  tweets: Tweet[]
}

const Feed = ({tweets}: Props) => {
    console.log(tweets);
     
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
    <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
    <RefreshIcon className='h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
    </div>

    {/* Tweetbox */}
    <div>
        <Tweetbox />
    </div>
    {/* Feed */}
    <div>
    {tweets.map(tweet => (
      <TweetComponent key={tweet._id} tweet={tweet} />
    ))}
    </div>
    </div>
  )
}

export default Feed