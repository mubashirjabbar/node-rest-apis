import express from "express"


export const isAuthenticated = async (req: express.Request, res: express.Response) => {
    try {
        const sessionToken = req.cookies["Dev"];

        if (!sessionToken) {
            return res.sendStatus(403)
        }
    } catch (error) {

    }
}