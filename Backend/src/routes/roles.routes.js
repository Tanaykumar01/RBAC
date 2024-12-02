import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { authorisedRoles } from "../middlewares/roles.middleware.js";

const router = Router();

router.route("/user").get(
    verifyJWT,
    authorisedRoles(["admin", "user", "manager"]),
    (req, res) => {
        res.json({ message: "Admin, manager, and user are authorised to access this route" });
    }
);

router.route("/manager").get(
    verifyJWT,
    authorisedRoles(["admin", "manager"]),
    (req, res) => {
        res.json({ message: "Admin and manager are authorised to access this route" });
    }
);

router.route("/admin").get(
    verifyJWT,
    authorisedRoles(["admin"]),
    (req, res) => {
        res.json({ message: "Admin is authorised to access this route" });
    }
);

export default router;