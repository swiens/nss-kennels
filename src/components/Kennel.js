import React from "react";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import "./Kennel.css";

export const Kennel = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <h2>Locations</h2>

    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Animals</h2>

    <AnimalProvider>
      <AnimalList />
    </AnimalProvider>
  </>
);
