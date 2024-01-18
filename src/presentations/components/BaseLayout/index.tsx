import styled from "@emotion/styled";
import { Outlet } from "@tanstack/react-router";

const Button = styled.button`
  background-color: red;
`;

export function BaseLayout() {
  return (
    <>
      <Button>Tastdatsd</Button>
      <Outlet />
    </>
  );
}
