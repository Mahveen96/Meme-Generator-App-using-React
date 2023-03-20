import React from 'react'
import memesData from '../memesData'

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/30b1gx.jpg',
  })

  // const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  const getMemeImage = () => {
    const memesArrays = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArrays.length)
    const url = memesArrays[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  const handleClick = (event) => {
    const { name, value } = event.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleClick}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleClick}
          value={meme.bottomText}
        />
        <button onClick={getMemeImage} className="form-btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme
