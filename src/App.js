import { useState } from 'react';
import './app.css';

export default function App(){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('More Thinness. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setMessage('Obese Class III. ')
      setBMI('BMI Value :  ' + bmi.toFixed(2));
    }
  }

  return(
    <div className="app">
      <h1>BMI CALCULATOR</h1>
      <span>Calculate your Body Mass Index Value <br></br>Insert Your Weight & Height</span>
      
      <div className="area-input">
        <input
          value={weight}
          type="text"
          placeholder="Enter Weight (kg)"
          onChange={ (e) => setWeight(e.target.value)}
        />

        <input
          value={height}
          type="text"
          placeholder="Enter Height (cm)"
          onChange={ (e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>
          Calculate
        </button>

      </div>
      <h2> {message} {bmi} </h2>
    </div>
  )
}