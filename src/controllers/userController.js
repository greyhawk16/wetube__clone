import User from "../models/User";


export const getJoin = (req, res) => {
    res.render("join", { pagetitle: "Join" });
};


export const postJoin = async (req, res) => {
    const pagetitle = "Join";

    const { name, email, username, password, password2, location } = req.body;
    if (password !== password2) {
        return res.status(400).render("join", {
            pagetitle,
            errorMessage: "Password confirmation Does Not match.",
        });
    }

    const exists = await User.exists({ $or: [{ username }, { email }] });
    if (exists) {
        return res.status(400).render("join", {
        pagetitle,
            errorMessage: "This username / email is already taken.",
        });
    }
        
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
};


export const edit = (req, res) => {
    res.send("Edit User");
};
export const remove = (req, res) => {
    res.send("Remove User");
};
export const login = (req, res) => {
    res.send("Login");
};
export const logout = (req, res) => {
    res.send("LogOut");
};
export const see = (req, res) => {
    res.send("See User");
};