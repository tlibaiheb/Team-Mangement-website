var express = require("express");
const { Register, Login } = require("../controllers/users.contollers");
const passport = require('passport');
const { ROLES, inRole } = require("../security/Rolemiddleware");
const { AddProfile, FindAllProfiles, FindSingleProfile, DeleteProfile } = require("../controllers/profile.controllers");
const { AddReclamation, FindAllReclamations, FindSingleReclamation, DeleteReclamation } = require("../controllers/reclamations.controllers");
const { AddResignation, FindAllResignations, FindSingleResignation, DeleteResignation } = require("../controllers/demissions.controllers");
const { AddLeave, FindAllLeaves, FindSingleLeave, DeleteLeave } = require("../controllers/conges.controllers");

var router = express.Router();

/* users routes */

router.post("/register", Register)
 router.post("/login", Login)

/* Test route */

 

/* Profile route */

/* add profile route */
router.post("/profiles",
    passport.authenticate("jwt", { session: false }),
    AddProfile);


/* get all profiles */
router.get("/profiles",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    FindAllProfiles);


/* get one profile */
router.get("/profile",
    passport.authenticate("jwt", { session: false }),
    FindSingleProfile);


/* delete profiles */
router.delete("/profiles/:id",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    DeleteProfile);



/* add reclamation route */
router.post("/reclamations",
    passport.authenticate("jwt", { session: false }),
    AddReclamation);


/* get all reclamations */
router.get("/reclamations",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    FindAllReclamations);


/* get one reclamation */
router.get("/reclamation",
    passport.authenticate("jwt", { session: false }),
    FindSingleReclamation);


/* delete reclamation */
router.delete("/reclamations/:id",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    DeleteReclamation);

/* add Resignation route */
router.post("/resignations",
    passport.authenticate("jwt", { session: false }),
    AddResignation);


/* get all Resignations */
router.get("/resignations",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    FindAllResignations);


/* get one Resignation */
router.get("/resignation",
    passport.authenticate("jwt", { session: false }),
    FindSingleResignation);


/* delete Resignation */
router.delete("/resignations/:id",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    DeleteResignation);






/* add Leave route */
router.post("/leaves",
    passport.authenticate("jwt", { session: false }),
    AddLeave);


/* get all Leaves */
router.get("/leaves",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    FindAllLeaves);


/* get one Leave */
router.get("/leave",
    passport.authenticate("jwt", { session: false }),
    FindSingleLeave);


/* delete Leave */
router.delete("/leaves/:id",
    passport.authenticate("jwt", { session: false }),
    inRole(ROLES.ADMIN),
    DeleteLeave);






module.exports = router;
