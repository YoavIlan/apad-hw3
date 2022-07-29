import { useState } from 'react';

export default function Form() {

// States for registration
const [name, setName] = useState('');
const [lastname, setLastName] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};




// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' ) {
	setError(true);
	} else {
	setSubmitted(true);
  var fetchURL="http://localhost/getLastName/" + name
  fetch(fetchURL)
  
  .then((response) => response.text())
  //.then((data) => console.log(data))
  .then(function(data){
    data=JSON.parse(data);

    if(data.code===200)
    {
    setLastName(data.name)
    setError(false);
    }
    else{
      setError(true);
      setLastName("response code: " + data.code + " and message recieved: " + data.error);
    }
  });
  

  //var lastName= JSON.parse(jsonBody);

  //name=lastName.name

	//setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
    <>
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<p >Response from backend: "{lastname}"</p>
	</div>
  </>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<p >Please enter a valid first name</p>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h3>Enter First Name. Hint: name should be 'Aman'</h3>
	</div>

	

	<form>
		{/* Labels and inputs for form data */}
		<label id="lbl" className="label">First Name: </label>
		<input id="inp" onChange={handleName} className="input"
		value={name} type="text" />

	



		<button onClick={handleSubmit} className="btn" type="submit" id="btn">
		Submit
		</button>
	</form>
  <div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
	</div>
);
}