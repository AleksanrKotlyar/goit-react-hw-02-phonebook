import styled from 'styled-components';
import { color, space, layout, flexbox, border } from 'styled-system';

export const Box = styled('div')(color, space, layout, flexbox, border);

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #3d341aba;
  margin-bottom: 16px;
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #3d341aba;
  margin-bottom: 24px;
  margin-top: 16px;
`;

export const LabelForm = styled('label')`
  display: flex;
  flex-direction: column;
`;
export const InputForm = styled.input`
  background-color: #1f55463d;
  width: 200px;
  
  :hover,
  :focus {
    background-color: white;
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-top: 8px;
  border: 0 solid transparent;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: transparent;
  border-radius: 3px;
  box-shadow: inset -2px -2px 4px 0 #222222;
  cursor: pointer;
  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;

  :hover,
  :focus {
    background-color: #9aec3d4d;

    box-shadow: inset -2px -2px 4px 0 #3d341aba;
  }
  :active {
    background-color: #9aec3d4d;
    box-shadow: inset 2px 2px 4px 0 #3d341aba;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  width: 350px;
`;
export const ContactNumber = styled.span`
  margin-left: 8px;
`;

export const DeleteBtn = styled.button`
  margin-left: 16px;
  border: 0 solid transparent;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: transparent;
  border-radius: 3px;
  box-shadow: inset -2px -2px 4px 0 #222222;
  cursor: pointer;
  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;

  :hover,
  :focus {
    background-color: #9aec3d4d;

    box-shadow: inset -2px -2px 4px 0 #3d341aba;
  }
  :active {
    background-color: #9aec3d4d;
    box-shadow: inset 2px 2px 4px 0 #3d341aba;
  }
`;
