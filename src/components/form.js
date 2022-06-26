import React from 'react'
import { useForm } from 'react-hook-form'

function form() {

    const { register, handleSubmit, watch, errors } = useForm();

    const clickOnSubmit = data => {
        console.log(data);
    }

  return (
    <div>
      <form onSubmit={handleSubmit()}>
          <input type="text" name="email" ref={register({required: true})} />
          {errors.email && <span>Esse campo é obrigatório</span>}
          <input type="text" name="name" ref={register} />
          <input type="password" name="password" ref={register} />
          <input type="number" name="phone" ref={register} />
          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default form;