import { useState } from "react";
import { createContainer } from "unstated-next";

export function useFiltersUsers() {
  const [orderBy, setOrderBy] = useState("pseudo_ASC");
  const [pseudo, setPseudo] = useState("");
  const [skip, setSkip] = useState(0);
  const [first, setFirst] = useState(1);

  return {
    skip,
    first,
    setFirst,
    setSkip,
    orderBy,
    setOrderBy,
    pseudo,
    setPseudo
  };
}

export function useFiltersNendoroids() {
  const [range, setRange] = useState({ min: 500, max: 530 });
  const [orderBy, setOrderBy] = useState("number_ASC");
  const [name, setName] = useState("");

  return {
    range,
    setRange,
    orderBy,
    setOrderBy,
    name,
    setName
  };
}

export function useFiltersSeries() {
  const [orderBy, setOrderBy] = useState("name_ASC");
  const [name, setName] = useState("");

  return {
    orderBy,
    setOrderBy,
    name,
    setName
  };
}

export function useFiltersManufacturers() {
  const [orderBy, setOrderBy] = useState("name_ASC");
  const [name, setName] = useState("");

  return {
    orderBy,
    setOrderBy,
    name,
    setName
  };
}

export function useFiltersSculptors() {
  const [orderBy, setOrderBy] = useState("name_ASC");
  const [name, setName] = useState("");

  return {
    orderBy,
    setOrderBy,
    name,
    setName
  };
}

export let FiltersUsers = createContainer(useFiltersUsers);
export let FiltersNendoroids = createContainer(useFiltersNendoroids);
export let FiltersSeries = createContainer(useFiltersSeries);
export let FiltersManufacturers = createContainer(useFiltersManufacturers);
export let FiltersSculptors = createContainer(useFiltersSculptors);
