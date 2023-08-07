import React, { useState } from 'react'
import './main.css'

const MainContent = () => {
    const [value,setValue] = useState('')

    const handlePlus = () => {
        if (value.slice(-1) !== '+') {
          setValue(prevValue => prevValue + '+');
        }
      }
      const handleMinus = () => {
        if (value.slice(-1) !== '-') {
          setValue(prevValue => prevValue + '-');
        }
      }
      const handleMult = () => {
        if (value.slice(-1) !== '*') {
          setValue(prevValue => prevValue + '*');
        }
      };
      
      const handleDiv = () => {
        if (value.slice(-1) !== '/') {
          setValue(prevValue => prevValue + '/');
        }
      }
      const handleFloat = () => {
        if (!value.includes('.')) {
          setValue(prev => prev + '.');
        }
      };
      const handleEquals = () => {
        try {
          const result = eval(value);
          
          if (result === Infinity || result === -Infinity) {
            setValue('Cannot divide by zero');
          } else if(result === '.'){
            setValue('0' + setValue(String(result)))
          }
          else {
            setValue(String(result));
          }
        } catch (error) {
          console.error('Error evaluating expression:', error);
        }
      }

    const handleOnClickNumbers = e => {
        setValue(() => value + e.target.value)
    }
    const handleDelete = () => {
        setValue(() => value.slice(0,-1))
        console.log(value);
    }
    const handleClear = () => {
        setValue('')
    }
  return (
    <div className='main-container'>
       
        <div className="grid-container">
            <div className="input-div">
                <input type="text" value={value}/>
            </div>
            <div className='first-row'>
                <input type="button" value="AC" onClick={handleClear}/>
                <input type="button" value="DE" onClick={handleDelete}/>
                <input type="button" value="/" onClick={handleDiv} />
            </div>
            <div className='second-row'>
                <input type="button" value="7" onClick={handleOnClickNumbers}/>
                <input type="button" value="8" onClick={handleOnClickNumbers}/>
                <input type="button" value="9" onClick={handleOnClickNumbers}/>
                <input type="button" value="X" onClick={handleMult} />
            </div>
            <div className='third-row'>
                <input type="button" value="4" onClick={handleOnClickNumbers}/>
                <input type="button" value="5" onClick={handleOnClickNumbers}/>
                <input type="button" value="6" onClick={handleOnClickNumbers}/>
                <input type="button" value="-" onClick={handleMinus} />
            </div>
            <div className='fourth-row'>
                <input type="button" value="1" onClick={handleOnClickNumbers}/>
                <input type="button" value="2" onClick={handleOnClickNumbers}/>
                <input type="button" value="3" onClick={handleOnClickNumbers}/>
                <input type="button" value="+" onClick={handlePlus} />
            </div>
            <div className='fifth-row'>
                <input type="button" value="0" onClick={handleOnClickNumbers}/>
                <input type="button" value="." onClick={handleFloat}/>
                <input type="button" value="=" onClick={handleEquals}/>
                
            </div>
        </div>
    </div>
  )
}

export default MainContent