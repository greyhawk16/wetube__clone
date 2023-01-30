import Video from "../models/Video";


// Video.find({}, (error, videos) => {
//     console.log("Search Finished");
// });

export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};
  

export const watch = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    return res.render("watch", { pageTitle: video.title, video });
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


export const postUpload = async (req, res) => {
    //add a video to video array
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            // createdAt: Date.now(),
            hashtags: hashtags.split(",").map(word => `#${word}`),
        });
        return res.redirect("/");
    } catch (error) {
        return res.render("upload", {
            pageTitle: "upload Video",
            errorMessage: error._message,
        });
    }
};