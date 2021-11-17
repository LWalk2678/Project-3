import "./HomeQuote.css"

const HomeQuote = (props) => {

  return (
    <section class="home-quote">
      <div class="quote">
        <p><em>{props.quote}</em></p>
      </div>
      { props.img ?
        <div class="image">
          <img src={props.img} alt='quote'/>
        </div>
      : '' }
    </section>
  )
}

export default HomeQuote
