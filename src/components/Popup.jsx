import React from 'react'

export default function Popup({ removePopup }) {
    //**replace <a href="./privacy">cookie-Richtlinie</a> with <Link to="/privacy">*/
  return (
    <div>
        <div className="modal-container">
			<div className="modal-b">
				<h4>Cookies und Websitedaten zulassen</h4>
				<p>
					Diese Website verwendet technisch notwendige Cookies – nähere Informationen dazu und zu Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung. <br/>
					Klicken Sie auf „Ich stimme zu“, um Cookies zu akzeptieren und unsere Website besuchen zu können.
				</p>
				<p>Um mehr darüber zu erfahren, wie wir Cookies verwenden, lesen Sie bitte unsere <a href="./privacy">cookie-Richtlinie</a></p>
				<button onClick={removePopup}>Ich stimme zu</button>
			</div>
		</div>
    </div>
  )
}
