import { useEffect, useState } from 'react';

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/7bk2.jpg'
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        async function fetchMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        fetchMemes()

    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme((prevState) => ({
            ...prevState,
            randomImage: url
        }))
    }

    // console.log(typeof(allMeme))

    function handleChange(e) {
        const { name, value } = e.target;
        setMeme((prevState) => ({
            ...prevState,
            [name] : value
        }) )
    }

  return (
    <main>
        <div className='form'>
            <input 
                type="text" 
                onChange={handleChange} 
                value={meme.topText} 
                name="topText" 
                placeholder='Top Text' 
                className='form--input' 
            />
            <input 
                type="text" 
                onChange={handleChange} 
                value={meme.bottomText} 
                name="bottomText" 
                placeholder='Bottom Text' 
                className='form--input' 
            />
            <button 
                onClick={getMemeImage} 
                className='form--button'
            >
                Get a new meme image 
            </button>
        </div>
        <div className='meme'>
            <img src={meme.randomImage} alt="" className='meme--image'/>   
            <h2 className='meme--text top'>{meme.topText}</h2>
            <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme

