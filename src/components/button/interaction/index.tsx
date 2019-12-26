import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks";
import {
  CREATE_INTERACTION_MUTATION,
  DELETE_INTERACTION_MUTATION
} from "../../../apollo/queries/index";

const InteractionButton = (props) => {

  const [isActive, setIsActive] = useState(props.isActive);

  const [createInteraction] = useMutation(CREATE_INTERACTION_MUTATION);
  const [deleteInteraction] = useMutation(DELETE_INTERACTION_MUTATION);

  const handleClick = type => {
    isActive ? setIsActive(false) : setIsActive(true);
    isActive
      ? deleteInteraction({
        variables: {
          interactionId: props.id.toString()
        }
      })
      : createInteraction({
        variables: {
          nendoroidId: props.id.toString(),
          // userId: `${currentUser.id}`,
          type: "LIKE"
        }
      });
  };

  return (
    <div
      role="button"
      onClick={() => handleClick(props.type)}
    >
      {isActive ? props.enabled : props.disabled}
    </div>
  )
}

export default InteractionButton;
