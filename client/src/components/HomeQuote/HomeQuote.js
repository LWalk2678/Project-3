import "./HomeQuote.css"

const HomeQuote = (props) => {

  return (
    <section className="home-quote">
      <div className="quote">
        <p><em>{props.quote}</em></p>
      </div>
      { props.img ?
        <div className="image">
          <img src={props.img} />
        </div>
      : '' }
    </section>
  )
}

export default HomeQuote
