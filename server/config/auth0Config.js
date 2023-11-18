import { auth } from 'express-oauth2-jwt-bearer'

const jwtcheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-5e4by6uy3yjik6ci.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtcheck


