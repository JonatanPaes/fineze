import { useTheme } from 'styled-components'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const summary = useSummary()
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={30} color={theme['green-300']} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={30} color={theme['red-300']} />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={30} color={theme.white} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
