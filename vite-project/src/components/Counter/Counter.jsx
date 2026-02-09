import './Counter.css'

function Counter({ count, onIncrement, onReset, canClick }) {
  return (
    <section className="counter">
      <div className="counter__actions">
        <button className="counter__button" type="button" onClick={onIncrement} disabled={!canClick}>
          Click
        </button>
        <button className="counter__button" type="button" onClick={onReset}>
          Reset
        </button>
      </div>
      <p className="counter__text">Count: {count}</p>
      {!canClick && <p className="counter__notice">Accept rules first.</p>}
    </section>
  )
}

export default Counter
