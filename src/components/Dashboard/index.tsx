import React, { useState } from 'react';

import {
  Container,
  Header,
  Menu,
  ContainerLogo,
  ItemMenu,
  ContainerCloseMenu
} from './styles';

import logo from '../../assets/logo-alianca.svg';
import social from '../../assets/social.svg';
import arrowRightDisabled from '../../assets/arrow-right-disabled.svg';
import arrowRightEnabled from '../../assets/arrow-right-enabled.svg';
import arrowCloseMenu from '../../assets/arrow-close-menu.svg';

const Dashboard: React.FC = () => {
  const [itensMenu, setItensMenu] = useState([
    {
      isActive: true,
      name: 'Funcionários'
    },
    {
      isActive: false,
      name: 'Financeiro'
    }
  ]);

  return (
    <Container>
      <Menu>
        <ContainerLogo className="test">
          <img src={logo} alt="Cartão Aliança" />
        </ContainerLogo>

        {
          itensMenu.map(itemMenu => (
            <ItemMenu isActive={itemMenu.isActive}>
              <div>
                <img src={social} alt="Funcionários" />
                <p>{itemMenu.name}</p>
              </div>
              { itemMenu.isActive && <img src={arrowRightEnabled} alt="Seta para direita" />}
              { !itemMenu.isActive && <img src={arrowRightDisabled} alt="Seta para direita" />}
            </ItemMenu>
          ))
        }

        <ContainerCloseMenu>
          <img src={arrowCloseMenu} alt="Fechar menu" />
        </ContainerCloseMenu>
      </Menu>
      <Header />
    </Container>
  );
}

export default Dashboard;