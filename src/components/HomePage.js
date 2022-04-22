import React from 'react'
import AnimeCard from './AnimeCard'
import { useRef } from 'react'

const Home = ({
  topAnimes,
  romAnimes,
  longAnimes,
  newAnimes,
  isekai,
  sportsAnime
}) => {
  let ref = useRef()
  let ref1 = useRef()
  let ref2 = useRef()
  let ref3 = useRef()
  let ref4 = useRef()
  let ref5 = useRef()

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }

  const scroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset
  }

  const scroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset
  }

  const scroll3 = (scrollOffset) => {
    ref3.current.scrollLeft += scrollOffset
  }

  const scroll4 = (scrollOffset) => {
    ref4.current.scrollLeft += scrollOffset
  }

  const scroll5 = (scrollOffset) => {
    ref5.current.scrollLeft += scrollOffset
  }

  return (
    <div className="mainContainer">
      <div className="scroll">
        <img
          className="banner"
          src="https://img1.ak.crunchyroll.com/i/spire2/17fdd3f4cd58577ad314b2676c8190501650313176_main.png"
          alt="empty"
        ></img>
        <div className="spacer"></div>
        <h1 className="carouselTitle"> Most Popular </h1>
        <section className="container">
          <button id="carouselButtonLeft" onClick={() => scroll(-500)}></button>
          <div className="wrapper" ref={ref}>
            {topAnimes.map((anime) => (
              <AnimeCard key={anime.id} {...anime} />
            ))}
          </div>
          <button id="carouselButtonRight" onClick={() => scroll(500)}></button>
        </section>

        <div>
          <h1 className="carouselTitle"> Sports </h1>
          <section className="container">
            <button
              id="carouselButtonLeft"
              onClick={() => scroll5(-500)}
            ></button>
            <div className="wrapper" ref={ref5}>
              {sportsAnime.map((anime) => (
                <AnimeCard key={anime.id} {...anime} />
              ))}
            </div>
            <button
              id="carouselButtonRight"
              onClick={() => scroll5(500)}
            ></button>
          </section>
        </div>

        <div>
          <h1 className="carouselTitle"> Romance </h1>
          <section className="container">
            <button
              id="carouselButtonLeft"
              onClick={() => scroll2(-500)}
            ></button>
            <div className="wrapper" ref={ref2}>
              {romAnimes.map((anime) => (
                <AnimeCard key={anime.id} {...anime} />
              ))}
            </div>
            <button
              id="carouselButtonRight"
              onClick={() => scroll2(500)}
            ></button>
          </section>
        </div>

        <div>
          <h1 className="carouselTitle"> Got Some Time? </h1>
          <section className="container">
            <button
              id="carouselButtonLeft"
              onClick={() => scroll3(-500)}
            ></button>
            <div className="wrapper romance" ref={ref3}>
              {longAnimes.map((anime) => (
                <AnimeCard key={anime.id} {...anime} />
              ))}
            </div>
            <button
              id="carouselButtonRight"
              onClick={() => scroll3(500)}
            ></button>
          </section>
        </div>

        <div>
          <h1 className="carouselTitle"> This Isn't My World? </h1>
          <section className="container">
            <button
              id="carouselButtonLeft"
              onClick={() => scroll4(-500)}
            ></button>
            <div className="wrapper romance" ref={ref4}>
              {isekai.map((anime) => (
                <AnimeCard key={anime.id} {...anime} />
              ))}
            </div>
            <button
              id="carouselButtonRight"
              onClick={() => scroll4(500)}
            ></button>
          </section>
        </div>

        <div>
          <h1 className="carouselTitle"> Soon To Be Added </h1>
          <section className="container">
            <button
              id="carouselButtonLeft"
              onClick={() => scroll1(-500)}
            ></button>
            <div className="wrapper romance" ref={ref1}>
              {newAnimes.map((anime) => (
                <AnimeCard key={anime.id} {...anime} />
              ))}
            </div>
            <button
              id="carouselButtonRight"
              onClick={() => scroll1(500)}
            ></button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Home
