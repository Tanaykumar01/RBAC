export const authorisedRoles = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.user?.role;
        if (!userRole) {
            return res.status(403).json({ message: "No role found. Access denied." });
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ message: "Access denied." });
        }

        next();
    };
};