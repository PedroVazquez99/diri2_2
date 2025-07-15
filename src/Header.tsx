
import { FC } from 'react';

import './styles/HeaderStyle.css'
interface HeaderProps {
  titulo: string;
}


const Header: FC<HeaderProps> = (props) =>  {
    return (
          <div className="header">
            <img src='/icons/menu.svg' className='icon'/>
            <h1>{props.titulo}</h1>
            <img src='/icons/search.svg' className='icon'/>
          </div>
      
    );
}

export default Header
