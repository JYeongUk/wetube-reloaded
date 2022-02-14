export const trending = (req, res) => res.render("home", { PageTitle: "Home" });
export const see = (req, res) => res.render("watch", { PageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { PageTitle: "Edt" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
