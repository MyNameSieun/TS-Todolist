import styled from "styled-components";

export interface StTodoCardItemProps {
  $isDone: boolean;
}

export const StTodoCardItem = styled.li<StTodoCardItemProps>`
  padding: 1rem;
  border: 1px solid #000;
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
`;
