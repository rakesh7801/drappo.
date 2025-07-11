import {Router} from "express"
const router = Router()
import  createPaymentIntent from "../controllers/paymentController.js"

router.post("/create-payment-intent", createPaymentIntent)


export default  router