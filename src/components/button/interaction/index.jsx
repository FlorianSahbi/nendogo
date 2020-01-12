import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  CREATE_INTERACTION_MUTATION,
  DELETE_INTERACTION_MUTATION
} from "../../../apollo/queries/index";

import Auth from "../../../globalStates/useAuth";
import Dial from "../../../globalStates/useDialog";
const InteractionButton = props => {
  const dial = Dial.useContainer();
  const auth = Auth.useContainer();


  const [isActive, setIsActive] = useState(props.isActive.isActive);
  const [createInteraction] = useMutation(CREATE_INTERACTION_MUTATION);
  const [deleteInteraction] = useMutation(DELETE_INTERACTION_MUTATION);

  const handleSetActive = type => {
    setIsActive(true);
    createInteraction({
      variables: {
        nendoroidId: props.srcId,
        userId: auth.user.id,
        type
      }
    });
  };

  const handleUnsetActive = () => {
    setIsActive(false);
    deleteInteraction({
      variables: {
        interactionId: props.isActive.interactionId
      }
    });
  };

  const handleClick = type => {
    if (auth.user === null) {
      dial.openDial();
      return;
    }
    isActive ? handleUnsetActive() : handleSetActive(type);
  };

  return (
    <div role="button" onClick={() => handleClick(props.type)}>
      {isActive ? props.enabled : props.disabled}
    </div>
  );
};

export default InteractionButton;
