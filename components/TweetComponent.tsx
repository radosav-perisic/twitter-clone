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
              <div>
                <p>{tweet.username}</p>
                <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>

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