import React from 'react'

const numbers = [...Array(100).keys()].map(n => n + 1)

const numberClasses = (number, step) => [
  'number',
  number % step === 0 ? 'active' : ''
].join(' ')


const Activity = () => {
  const [step, setStep] = React.useState(0)

  const Button = ({ step }) => (
    <button onClick={() => setStep(step)}>{step}</button>
  )

  return (
    <>
      <div className='controls'>
        <button onClick={() => setStep(0)}>Retirer les bonds</button>
      </div>
      <div className='controls'>
        <Button step={2} />
        <Button step={3} />
        <Button step={4} />
        <Button step={5} />
        <Button step={6} />
        <Button step={7} />
        <Button step={8} />
        <Button step={9} />
        <Button step={10} />
      </div>
      <div className='row'>
        <div className='scroll'>
          {numbers.map(number => (
            <div key={number} className={numberClasses(number, step)}>{number}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Activity
