import "./styles.css";
import { FC } from 'react';
import PropTypes from 'prop-types';  // Aunque TypeScript hace uso de PropTypes innecesario, a veces se puede usar ambos.

interface ContentProps {
  titulo: string;
  hora: string;
  alt: string;
  src: string;
}

const Content: FC<ContentProps> = ({titulo, hora, src, alt}) => {
  return (
    <div className="content">
      <div className="line"></div>
      <div className="item">
        <div className="avatar">
          <img alt={alt} src={`/images/${src}.jpg`} />
        </div>
        <span className="time">{hora}</span>
        <p>{titulo}</p>
      </div>
    </div>
  );
};

export default Content;
