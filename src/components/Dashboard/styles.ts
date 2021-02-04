import styled, { css } from 'styled-components';

interface IItemMenu {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Menu = styled.nav`
  width: 270px;
  height: 100vh;
  background-color: #292E60;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;

  img {
    width: 130px;
  }
`;

export const Header = styled.nav`
  width: 100%; 
  height: 160px;
  background-color: #933C85;
`;

export const ItemMenu = styled.div<IItemMenu>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 26px;
  cursor: pointer;
  ${props => props.isActive && css`background: rgba(255, 255, 255, 0.1);` }

  div {
    display: flex;
    align-items: center;
    color: #FFFFFF;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
    }

    img {
      width: 22px;
      margin-right: 12px;
    }
  }
`;

export const ContainerCloseMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 26px;

  img {
    width: 16px;
  }
`;
