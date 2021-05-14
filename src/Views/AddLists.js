import AddListForm from "components/AddListForm";
import AppLayout from "components/Layouts/AppLayout";
import Navbar from "components/Navbar/Navbar"

import React from "react";
import { useHistory } from "react-router";

function AddLists() {
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/pay')
  }
 
  return (
    <AppLayout>
      <Navbar/>
      <main className="color-primary">
        <div className="container">
          <div style={{ padding: "100px 0 50px 0" }}>
            <h1 className="color-primary text-center" style={{color:"purple"}}>Add Property</h1>
          </div>
          <AddListForm handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </AppLayout>
  );
}

export default AddLists;
