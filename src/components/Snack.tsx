import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { ISnackbar } from '../types/types'

export default function Snack({open, handleClose}:ISnackbar) {
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity="success">
                Product added to cart!
            </Alert>
        </Snackbar>
    )
}
