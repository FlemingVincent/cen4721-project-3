import React from 'react'
import {  doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'

export const getUserById = (id) => new Promise((resolve, reject) => {
    getDoc(doc(db, 'users', id))
    .then((res) => {
        resolve(res.exists ? res.data() : null)
    })
    .catch(() => reject())
})
