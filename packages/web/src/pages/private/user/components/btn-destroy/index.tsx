// import { swap } from 'formik'
import React from 'react'

import Swal from 'sweetalert2'
import { Icon, Button } from './style'

import { destroyUser } from '../../../../../shared/service/users'
interface IPropsUser {
  id?: number
  confirm(id: number): void
}

const BtnDestroy: React.FC<IPropsUser> = ({ id, confirm }) => {
  const timer = 3000
  const destroyHandler = () => {
    if (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Delete this line',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it',
        cancelButtonText: 'No, keep it',
      }).then(result => {
        if (result.value) {
          deleteUser(id)
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: 'Canceled!',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            timer,
            showConfirmButton: false,
          })
        }
      })
    }
  }

  const deleteUser = async (userId: number) => {
    try {
      await destroyUser(userId)
      confirm(userId)
      Swal.fire({
        title: 'Deleted!',
        text: 'Your imaginary file has been deleted',
        icon: 'success',
        timer,
        showConfirmButton: false,
      })
    } catch (error) {
      Swal.fire({
        title: 'Canceled!',
        text: 'Something is wrong',
        icon: 'warning',
        timer,
        showConfirmButton: false,
      })
    }
  }

  return (
    <Button type="button" onClick={destroyHandler}>
      <Icon className="danger" icon={['far', 'trash-alt']} />
    </Button>
  )
}

export default BtnDestroy
