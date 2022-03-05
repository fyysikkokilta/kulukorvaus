import React, { useState } from 'react';
import { Form, Button, } from 'react-bootstrap'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';
import axios from 'axios'


const Reimbursement = (): JSX.Element => {
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const name = event.target.name.value
        const iban = event.target.iban.value
        axios.post('localhost:8000/api/reimburse', data={})
    }
    return (
        <Form>
            <Form.Group controlId='name' >
                <Form.Label>Nimi</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group controlId='iban' >
                <Form.Label>IBAN</Form.Label>
                <Form.Control />
            </Form.Group>
            <Button type='submit'>Lähetä</Button>
        </Form>
    )
}

export default Reimbursement