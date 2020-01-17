import { useState } from "react";
import { createContainer } from "unstated-next";

const DEFAULT_FILTERS = {
  range: { min: 0, max: 100 },
  orderBy: "number_ASC",
  name: ""
};

function useFiltersNendoroids() {
  const [range, setRange] = useState({ min: 0, max: 100 });
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

export let FiltersNendoroids = createContainer(useFiltersNendoroids);
export let FiltersManufacturers = createContainer(useFiltersManufacturers);
