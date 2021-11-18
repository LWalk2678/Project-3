import "./HomeQuote.css"

const HomeQuote = (props) => {

  return (
    <section class="home-quote">
      <div class="quote">
        <p><em>{props.quote}</em></p>
      </div>
      { props.img ?
        <div class="image">
          <img src={props.img} alt="fruit quote" />
        </div>
      : '' }
    </section>
  )
}

export default HomeQuote
