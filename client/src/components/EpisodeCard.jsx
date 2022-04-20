import React from 'react'

const EpisodeCard = ({ title, thumbnail, url }) => {
  const onClick = () => {
    window.location.href = `${url}`;
  }
  
  return (
    <div className='epcontainer' onClick={() => onClick()}>
      <div id="container">
      <div className="card">
        <div className="cardImgBox">
          <img src={thumbnail} alt={title} className="cardImage" width="450" />
        </div>
        <div className="cardBody">
          <h4>{title}</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EpisodeCard