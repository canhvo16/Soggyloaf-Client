import React from 'react'
import { useNavigate } from 'react-router-dom'

const EpisodeCard = ({ title, thumbnail, url }) => {
  const navigate = useNavigate()
  const onClick = () => {
    window.location.href = `${url}`;
  }
  
  return (
    <div className='epcontainer' onClick={() => onClick()}>
      <div id="container">
      <div class="card">
        <div class="cardImgBox">
          <img src={thumbnail} alt={title} class="cardImage" width="450" />
        </div>
        <div class="cardBody">
          <h4>{title}</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EpisodeCard