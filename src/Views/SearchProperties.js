import AppLayout from "components/Layouts/AppLayout";
import PropertyList from "components/searchproperties/PropertyList";
import React from "react";

function SearchProperties() {
  return (
    <AppLayout>


      <h2 className='color-primary text-center'>Listed Properties</h2>

      <PropertyList />
    </AppLayout>
  );
}

export default SearchProperties;
