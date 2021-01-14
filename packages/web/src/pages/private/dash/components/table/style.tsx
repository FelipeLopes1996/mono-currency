import styled from 'styled-components'
import { rgba } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const TableContainer = styled.table`
  padding: 1.5rem;
  width: auto;
`

export const TableHeader = styled.thead`
  /* border-bottom: 1rem solid $ {props => props.theme.fg.default}; */
  background-color: ${props => rgba(props.theme.fg.body, 0.2)};
  tr,
  th {
    padding: 0.4;
    text-align: center;
  }
`

export const TableBody = styled.tbody`
  tr,
  td {
    transition: all 0.6s cubic-bezier(0.2, 1, 0.22, 1);
  }
  td {
    text-align: center;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  tr {
    &:hover {
      background-color: ${props => rgba(props.theme.fg.body, 0.3)};
    }
    &:nth-child(even) {
      background-color: ${props => rgba(props.theme.fg.body, 0.1)};
      &:hover {
        background-color: ${props => rgba(props.theme.fg.body, 0.4)};
      }
    }
  }
`

export const Tr = styled.tr``

export const Td = styled.td``

export const Th = styled.th``

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  transition: all 0.3s ease-in-out;

  &.danger {
    color: ${props => props.theme.fg.danger};
  }
  &.warning {
    color: ${props => props.theme.fg.warning};
  }
  &.info {
    color: ${props => props.theme.fg.info};
  }

  &:hover {
    color: ${props => props.theme.fg.info};
  }
`
