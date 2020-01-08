import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  CREATE_INTERACTION_MUTATION,
  DELETE_INTERACTION_MUTATION
} from "../../../apollo/queries/index";
import { UserContext } from "../../layout/index";

const InteractionButton = props => {
  const currentUser = useContext(UserContext);

  const [isActive, setIsActive] = useState(props.isActive.isActive);
  const [createInteraction] = useMutation(CREATE_INTERACTION_MUTATION);
  const [deleteInteraction] = useMutation(DELETE_INTERACTION_MUTATION);


  const handleClick = type => {
    isActive ? setIsActive(false) : setIsActive(true);
    isActive
      ? deleteInteraction({
          variables: {
            interactionId: props.isActive.interactionId
          }
        })
      : createInteraction({
          variables: {
            nendoroidId: props.srcId,
            userId: currentUser.id,
            type
          }
        });
  };

  return (
    <div role="button" onClick={() => handleClick(props.type)}>
      {isActive ? props.enabled : props.disabled}
    </div>
  );
};

export default InteractionButton;
