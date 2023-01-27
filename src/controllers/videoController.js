import Video from "../models/Video";


// Video.find({}, (error, videos) => {
//     console.log("Search Finished");
// });

export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};
  

export const watch = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching`});
};


export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render("edit", { pageTitle: `Editing`});
};


export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    res.redirect(`/videos/${id}`);
};


export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "upload Video" });
};


export const postUpload = (req, res) => {
    //add a video to video array
    const { title } = req.body;
    return res.redirect("/");
}