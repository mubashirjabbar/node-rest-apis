import express from "express"

import { deleteUser, getAllUser } from "../controllers/user"
import { isAuthenticated } from "../middleware"

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUser)
    router.delete('/users/:id', deleteUser)
    return router;
}