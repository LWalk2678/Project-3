import "./HomeQuote.css"

const HomeQuote = (props) => {

  return (
    <section class="home-quote">
      <p>{props.quote}</p>
      { props.img ?
        <img src={props.img} />
      : '' }
    </section>
  )
}

export default HomeQuote
