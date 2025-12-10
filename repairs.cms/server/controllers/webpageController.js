import Webpage from "../models/webpageModel.js";

export const listWebpages = async (req, res) => {
    try {
        const webpages = await Webpage.find({}).sort({createdAt: -1});
        return res.send({status: true, message: "Webpages fetched", webpages})
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const createWebpages = async (req, res) => {}
export const detailWebpage = async (req, res) => {}
export const deleteWebpage = async (req, res) => {}
export const updateWebpage = async (req, res) => {}