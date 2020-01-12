import { useState } from "react";
import { createContainer } from "unstated-next";

function useDialog() {
  let [open, setOpen] = useState(false);

  let openDial = () => setOpen(true);
  let closeDial = () => setOpen(false);

  return {
    open,
    openDial,
    closeDial
  };
}

let Dial = createContainer(useDialog);

export default Dial;
