import React from 'react';
import Header from './Header';
import Content from './Content';
import ActivityItem from './ActivityItem';

const TaskLogging: React.FC = () =>  {

  const obj = [
    {
      tiempo: "Hace 10 minutos",
      titulo: "Leí un artículo sobre tecnología",
      src: "francisca",
      alt: "Francisca"
    },
    {
      tiempo: "Hace 1 hora",
      titulo: "Fui a comer con amigos",
      src: "curro",
      alt: "Curro"
    },
    {
      tiempo: "Hace 3 horas",
      titulo: "Compré un nuevo monitor para mi computadora",
      src: "paco",
      alt: "Paco"
    },
    {
      tiempo: "Hace 5 horas",
      titulo: "Preparé la presentación para la reunión de mañana",
      src: "quica",
      alt: "Quica"
    },
  ];

    return (
      <>
      <div className="notificationsFrame">
        <div className="panel">
          <Header titulo='Registro de tareas'></Header>
          <Header titulo='Perfil'></Header>
          <Header titulo='Preferencias'></Header>
          <Header titulo='Chat'></Header>
          {
            obj.map((item, index) => 
              <ActivityItem key={index} titulo={item.titulo} hora={item.tiempo} src={item.src} alt="avatar" 
            />)
          }
        </div>
      </div>
      </>
    );
}

export default TaskLogging;
