import React from 'react'
import { Tweet } from '../typings'


interface Props {
    tweet: Tweet
  }

function TweetComponent({tweet}: Props) {
  return( 
    <div>
        <div>
            <img src={tweet.profileImg} alt='/' />
            <div>
              <div>
                <p>{tweet.username}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TweetComponent; 