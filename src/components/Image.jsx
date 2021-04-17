import React from 'react'
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate"
import styled from "styled-components";

export const Image = () => {
  return (
    <div>
      <IconButton>
        <label>
          <AddPhotoAlternateIcon />
          <SInput type="file" id="image" />
        </label>
      </IconButton>
    </div>
  )
}

const SInput = styled.input`
  display:none;
`