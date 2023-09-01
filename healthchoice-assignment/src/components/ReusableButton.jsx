import React from "react";
import { Button } from "@material-ui/core";

const ReusableButton = ({ bVariant, bClassName, title }) => {
   return (
      <Button variant={bVariant} className={bClassName}>
         {title}
      </Button>
   ); 
};

export default ReusableButton;
