import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../typings'
import { fetchTweets } from '../utlis/fetchTweets'
import Tweetbox from './TweetBox'
import TweetComponent from './TweetComponent'

interface Props {
  tweets: Tweet[]
}

const Feed = ({tweets: tweetsProp}: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
    console.log(tweets);

    const handleRefresh = async () => {
     const refreshToast = toast.loading('Refreshing...')

      const tweets = await fetchTweets();
      setTweets(tweets)

      toast.success('Feed Updated!', {
        id: refreshToast
      })
    }
     
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
    <div className='flex items-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
    <RefreshIcon onClick={handleRefresh} className='h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
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