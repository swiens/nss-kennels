import React, { useContext, useEffect, useState } from "react";
import { AnimalContext, getAnimals } from "./AnimalProvider";
import "./Animal.css";

export const AnimalDetails = (props) => {
  const { getAnimalById, releaseAnimal, getAnimals } = useContext(AnimalContext);

  const [animal, setAnimal] = useState({ location: {}, customer: {} });

  useEffect(() => {
    const animalId = parseInt(props.match.params.animalId);
    getAnimalById(animalId).then(setAnimal);
  }, []);

  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      <div className="animal__location">Location: {animal.location.name}</div>
      <div className="animal__owner">Customer: {animal.customer.name}</div>
        
        Edit
      <button
        className="btn--release"
        onClick={() => {
          releaseAnimal(animal.id).then(() => {
            props.history.push("/animals");
          });
        }}
      >
        Release
      </button>
    </section>
  );
};
