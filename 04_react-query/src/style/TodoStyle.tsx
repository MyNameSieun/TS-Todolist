import styled from "styled-components";

export interface StTodoCardItemProps {
  $isDone: boolean;
}

export const StTodoCardItem = styled.li<StTodoCardItemProps>`
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
`;
