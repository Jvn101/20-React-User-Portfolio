import React from 'react';

function Card({portfolio}) {
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

