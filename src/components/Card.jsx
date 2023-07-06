import React from 'react';

function Card({portfolio}) {
//   const cardStyle = {
//     width: '18rem',
//   };
const {title, image, description, repository, deployedlink} = portfolio


  return (
    <div class="card">
      <h1>{title}</h1>
      <img
        src={image} />
      <div>
        <h3>
          <a href={repository}>GitHub</a>{' '}
          <a href={deployedlink}>DeployedLink</a>{' '}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;


//     <div>
//          <div className="columns is-desktop is-justify-content-center is-flex-wrap-wrap is-flex-direction-row">
//         {props.portfolio.map((projects) => (
//       // <div className="card" >
//       //   <img
//       //     className="card-img-top"
//       //     src={`http://placekitten.com/`}
//       //     alt="Card cap"
//       //   />
//       <div className="card">
//        <div className="card-image">
//         <div className="card-body">
//         <h5 className="card-title">Title: {props.title}</h5>
//           <p className="card-text">Description: {props.description}</p>
//           <a href="#" className="btn btn-primary">
//             Adopt {props.title}
//           </a>
//         </div>
//       </div>
//       </div>
//       ))}
//       </div>
//     </div>
//   );
// }