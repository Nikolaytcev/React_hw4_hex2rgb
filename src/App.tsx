import { useState } from 'react'
import './App.css'
import { Form } from './Components/Form/Form'
import { validateHex } from './validate';

interface Iform {
  name: string
}

function App() {
  const [form, setColor] = useState<Iform>({
    name: '#000000'
  });

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (value.length >= 7) {
      const validate = validateHex(value);
      validate ? setColor((prevForm) => ({...prevForm, [name]: validate})) :
      setColor((prevForm) => ({...prevForm, [name]: "Ошибка!"}))     
    }
          
  }

  return (
    <>
      <Form color={form.name} changeColor={handleChangeColor}/>
    </>
  )
}

export default App
