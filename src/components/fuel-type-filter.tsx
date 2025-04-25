"use client";

const FuelTypeFilter = ({
  currentFilter,
  fuelTypeFilterValues,
  filterByFuelType,
}: {
  currentFilter: string;
  fuelTypeFilterValues: string[];
  filterByFuelType: (fuelType: string) => void;
}) => {
  return (
    <>
      <fieldset className="flex flex-col gap-4 px-4">
        <legend className="text-xl">Fuel Type</legend>
        <div className="flex flex-col">
          {fuelTypeFilterValues.map((filterValue) => (
            <>
            <input
              type="radio"
              name="fuelType"
              onClick={() => filterByFuelType(filterValue)}
              key={filterValue}
              value={filterValue}
              id={filterValue}
              className={`cursor-pointer border border-solid border-gray-200 px-6 py-2 ${filterValue === currentFilter ? "bg-gray-200" : ""}`}
            />
            <label htmlFor={filterValue}>{filterValue}</label>
            </>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default FuelTypeFilter;
