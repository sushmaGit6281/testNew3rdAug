import "./index.css"
function Active() {
	return (
		<div className='success-message-container'>
			<div className='success-message'>
				<img
					src='/assets/images/icon-list.svg'
					alt='icon for the list in the sign up form'
					className='icon-container'
				/>
				<h1 className='thanks-container'>Thanks for suscribing!</h1>
				<p className="paragragh-container">
					A confirmation email has been sent to
					Please
					open it and click the button inside to confirm your subscription.
				</p>
				<button className='button-container'>Dismiss message</button>

			</div>
		</div>
	)
}
export default Active