import './Toggle.css'

function Toggle({ accepted, onAccept }) {
  return (
    <section className="toggle">
      <div className="toggle__panel">
        <p className="toggle__title">Rules for Click:</p>
        <ul className="toggle__rules">
          <li>Only manual clicks count as points.</li>
          <li>No auto-clickers.</li>
          <li>Reset starts a new round.</li>
        </ul>
        <button
          className="toggle__button"
          type="button"
          onClick={onAccept}
        >
          {accepted ? 'Decline rules' : 'Accept rules'}
        </button>
      </div>
    </section>
  )
}

export default Toggle
