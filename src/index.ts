// src/index.ts
import express, { Request, Response } from "express";
import { SignInReq, SignInRes } from "./type";

const app = express();
app.use(express.json());

app.post(
    "/auth/signin",
    (req: Request<{}, SignInRes, SignInReq>, res: Response<SignInRes>) => {
        const { accountId, accountPw } = req.body;

        // Mock 검증 로직
        if (!accountId || !accountPw) {
            return res.status(401).json({
                accessToken: "",
            });
        }

        // Mock access token
        return res.status(200).json({
            accessToken: "mock-access-token-" + accountId,
        });
    }
);

app.listen(4000, () => {
    console.log("Mock API Server running on http://localhost:4000");
});
