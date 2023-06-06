export function Calculator({result, handleClick, handleResult, clear, backspace}) {


    return (
        <div className='container'>
      <form className='form'>
        <input 
        type='text' 
        placeholder='0'
        value={result}
        />
      </form>

      <div className='keypad'>
        <button onClick={clear} name='clear'  className='clear key'>Clear</button>
        <button onClick={backspace} name='backspace' className='backspace key'>C</button>
        <button onClick={handleClick} name='/' className='key'>&divide;</button>
        <button onClick={handleClick} name='7'>7</button>
        <button onClick={handleClick} name='8'>8</button>
        <button onClick={handleClick} name='9'>9</button>
        <button onClick={handleClick} name='*' className='key'>&times;</button>
        <button onClick={handleClick} name='4'>4</button>
        <button onClick={handleClick} name='5'>5</button>
        <button onClick={handleClick} name='6'>6</button>
        <button onClick={handleClick} name='-' className='key'>&ndash;</button>
        <button onClick={handleClick} name='1'>1</button>
        <button onClick={handleClick} name='2'>2</button>
        <button onClick={handleClick} name='3'>3</button>
        <button onClick={handleClick} name='+' className='key'>+</button>
        <button onClick={handleClick} name='0'>0</button>
        <button onClick={handleClick} name='.'>.</button>
        <button onClick={handleResult} name='=' className='equal key'>=</button>
      </div>

    </div>
    )
}