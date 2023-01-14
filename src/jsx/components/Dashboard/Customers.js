import React, { Fragment } from "react";

// Table
import CustomersTable from "./acara/dashboardTable/Customers/CustomersTable";

const Customers = () => {
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12">
               <CustomersTable />
            </div>
         </div>
      </Fragment>
   );
};

export default Customers;
