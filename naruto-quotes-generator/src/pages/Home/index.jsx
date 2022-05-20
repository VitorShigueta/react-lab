import narutoImg from '../../assets/images/naruto.png'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Quotes } from '../../components/quotes/Quotes'
import { getQuote } from '../../services/quotesService'
import  justsoSound  from '../../assets/sounds/jutso.mp3'

const audio = new Audio(justsoSound)

export function Home() {

  const [quote, setQuote] = useState({
    speaker: 'Loading speaker...',
    quote: 'Loading Quote'
  });

  const onUpdate = async () => {
    const resQuote = await getQuote();
    setQuote(resQuote);
    audio.play();
  };

  useEffect(() =>{
    onUpdate()
  },[])

  return (
    <Content>
      <Quotes {...quote} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto" />
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`
