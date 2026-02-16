import './Counter.css'

function Counter({ count, onIncrement, onReset, canClick }) {
  return (
    <section className="counter">
      <div className="counter__actions">
        <button className="counter__button" type="button" onClick={onIncrement}>
          Tryk mig! 
        </button>
        <button className="counter__button" type="button" onClick={onReset}>
          Nulstil
        </button>
      </div>
      <p className="counter__text">Count: {count}</p>
    </section>
  )
}

export default Counter
