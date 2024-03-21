interface Iform {
    color: string,
    changeColor: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Form = ({ color, changeColor}: Iform) => {
  return (
    <div className="block" style={{backgroundColor: `rgb(${color.slice(0, 2)}, ${color.slice(2, 4)}, ${color.slice(4, 6)})`}}>
      <form>
        <input name="name" type="text" onChange={changeColor}></input>
        {color === 'Ошибка!' ? <button type="submit">Ошибка!</button> :
        color[0] === '#' ? <button type="submit">rgb(0, 0, 0)</button> :
        <div className="color" style={{backgroundColor: `rgb(${color.slice(0, 2)}, ${color.slice(2, 4)}, ${color.slice(4, 6)})`}
                              }>
                              rgb({`${Number(color.slice(0, 2))}`},
                                  {`${Number(color.slice(2, 4))}`},
                                  {`${Number(color.slice(4, 6))}`})</div>}
    </form>
    </div>
  )
}
