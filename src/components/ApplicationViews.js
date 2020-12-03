import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animals">
              <AnimalList />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        {/* Render the Employee list when http://localhost:3000/employees */}
        <Route path="/employees">
          <EmployeeList />
        </Route>
      </EmployeeProvider>

      <CustomerProvider>
        {/* Render the customer list when http://localhost:3000/customers */}
        <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>
    </>
  );
};
