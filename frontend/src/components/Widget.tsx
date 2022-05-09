import {ChatTeardropDots} from 'phosphor-react'
import { useState } from 'react'
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

//SEMPRE QUE PRECISO QUE ALGUMA COISA MUDE DE ACORDO COM UMA AÇÃO DO USUÁRIO NO REACT
//NÓS UTILIZAR O ESTADO

//ESTADO É UMA VARIAVEL, COMO QUALQUER OUTRA DO JAVASCCRIPT, PORÉM NO ESTADO, O REACT FICA OBSERVANDO
//ESSAS VARIÁVEIS DO ESTADO, E ODA VEZ QUE ESSAS VARIÁVEIS MUDAREM O SEU VALOR, TIVEREM OS SEUS VALORES ALTERADOS,
//ELE VAI CRIAR A INTERFACE DESSE COMPONENTE DENOVO COM O NOVO VALOR DA VARIÁVEL DO ESTADO

export function Widget(){
const [isWidgetOpen, setIsWidgetOpen] = useState(false)

/* function toggleWidgetVisibility(){
    setIsWidgetOpen(!isWidgetOpen)
}
 */
    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end'>
        {/*  {
             isWidgetOpen && <p>Hello World</p>
         } */}

         <Popover.Panel>
            <WidgetForm/>
         </Popover.Panel>

        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
           <ChatTeardropDots className='w-6 h-6'/>
           <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
               <span className='pl-2'></span>
               Feedback
               </span>
        </Popover.Button>
        </Popover>
    )
}
