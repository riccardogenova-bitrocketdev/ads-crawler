/** @format */

import styled from 'styled-components';

export const Button = styled.button`
  outline: none;
  border: none;
  min-height: 3rem;
  min-width: 15rem;
  background: #cfd7ff;
  border: 1px solid #4e57ef;
  box-shadow: 3px 4px 0px #4e57ef;
  cursor: pointer;
  color: white;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1px;
  font-size: 1.35rem;
  padding: 0.5rem;
  &:hover {
    opacity: 1;
    background: #4e57ef;
    color: white;
    border: 1px solid #cfd7ff;
    box-shadow: 3px 4px 0px #cfd7ff;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;
