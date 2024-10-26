import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";

const TextArea = styled(TextareaAutosize)(
  `
    box-sizing: border-box;
    width: 70%;
    font-family: 'Exo', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    color: #000;
    background: #fff;
    border: 1px solid transparent;
    transition : all 0.3s ease-in;
    border-radius: 5px;
    box-shadow:  0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    resize: none;

    &:hover {
   border-color: #d9d9d9
    }

    &:focus {
      border-color: #d9d9d9;

    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
export default TextArea;
