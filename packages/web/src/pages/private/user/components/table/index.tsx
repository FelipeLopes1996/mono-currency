import React, { useEffect, useState } from 'react'

import { IUser } from '../../../../../shared/interface/user'
import { getUsers } from '../../../../../shared/service/users'
import BtnDestroy from '../btn-destroy'

import {
  TableContainer,
  TableHeader,
  TableBody,
  Tr,
  Th,
  Td,
  Actions,
  Icon,
  Link,
} from './style'

const Table = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    const init = async () => {
      if (users) {
        const response = await getUsers()
        setUsers(response)
      }
    }
    init()
  }, [users])

  const removeLineById = (id: number) => {
    const _user: IUser[] = users.filter(user => user.id !== id)
    setUsers(_user)
  }

  return (
    <TableContainer>
      <TableHeader>
        <Tr>
          <Th>#ID</Th>
          <Th>nome</Th>
          <Th>Role</Th>
          <Th>E-mail</Th>
          <Th>Action</Th>
        </Tr>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <Tr key={index}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>Admin</Td>
            <Td>{user.email}</Td>
            <Td>
              <Actions>
                <Link to={`user/${user.id}`}>
                  <Icon className="info" icon={['far', 'edit']} />
                </Link>
                <Link to={`user/${user.id}/show`}>
                  <Icon className="warning" icon={['fas', 'info']} />
                </Link>
                <BtnDestroy id={user.id} confirm={removeLineById} />
              </Actions>
            </Td>
          </Tr>
        ))}
      </TableBody>
    </TableContainer>
  )
}

export default Table
