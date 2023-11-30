import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionsButton>Nova Transação</NewTransactionsButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
