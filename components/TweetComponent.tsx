import React from 'react'
import { Tweet } from '../typings'
import Timeago from 'react-timeago'


interface Props {
    tweet: Tweet
  }

function TweetComponent({tweet}: Props) {
  return( 
    <div>
        <div>
            <img src={tweet.profileImg} alt='' />
            <div>
              <div className='flex items-center space-x-1'>
                <p className='mr-1 font-bold'>{tweet.username}</p>
                <p className='hidden text-sm text-gray-500 sm:inline'>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>

                <Timeago 
                className='text-sm text-gray-500'
                date={tweet._createdAt}
                />
              </div>

            </div>
        </div>
    </div>
  )
}

export default TweetComponent; 