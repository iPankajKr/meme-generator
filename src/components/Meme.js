import memesData from '../memesData'
import { useState } from 'react';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/28s2gu.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme((prevState) => ({
            ...prevState,
            randomImage: url
        }))
    }

  return (
    <main>
        <div className='form'>
            <input type="text" placeholder='Top Text' className='form--input' />
            <input type="text" placeholder='Bottom Text' className='form--input' />
            <button onClick={getMemeImage} className='form--button'>Get a new meme image </button>
        </div>
        <img src={meme.randomImage} alt="" className='meme--image'/>
    </main>
  )
}

export default Meme

