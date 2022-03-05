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
    const onSubmit = async (event: any) => {
        console.log(event)
        event.preventDefault()
        const name = event.target.name.value
        const iban = event.target.iban.value

        const form = new FormData();
        form.append('name', name)
        form.append('iban', iban)

        const res = await axios.post('/api/reimburse', form, {headers: {
            'Accept': 'application/json'
        }})
        console.log(res.data)
    }
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group >
                <Form.Label>Nimi</Form.Label>
                <Form.Control name='name'/>
            </Form.Group>
            <Form.Group>
                <Form.Label>IBAN</Form.Label>
                <Form.Control name='iban'/>
            </Form.Group>
            <Button type='submit'>Lähetä</Button>
        </Form>
    )
}

export default Reimbursement