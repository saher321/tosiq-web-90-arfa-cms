import AboutUs from "../models/aboutUsModel.js";


export const aboutUsDetail = async (req, res) => { // show contact us form details
    try {
        const aboutUs = await AboutUs.find({}).sort({createdAt: -1});
        console.log("aboutUs:", aboutUs);
        return res.send({status: true, message: "About Us fetched", aboutUs})
    } catch (error) {
        console.log("Error: ", error);
    }
}
export const aboutUs = async (req, res) => { // add || update
    const { id } = req.params;
    const { mission, vision, features } = req.body;

    console.log("ID:", id);
    console.log("Req Body:", req.body);

    // try {
    //     if (id) {
    //         const existingAboutUs = await AboutUs.findById({ _id: id});
    //         if (existingAboutUs) {
    //             const updatedAboutUs = await AboutUs.findByIdAndUpdate( { _id: id }, { mission, vision, features }, { new: true } );
    //             if (updatedAboutUs) {
    //                 return res.send({status: true, message: "About Us updated successfully", updatedAboutUs});
    //             } else {
    //                 return res.send({status: false, message: "About Us not found"});
    //             }
    //         }
    //     }

        
    //     // new entery
    //     if (!mission || !vision || !features) {
    //         return res.send({status: false, message: "All fields are required"});
    //     }

    //     const newAboutUs = await AboutUs.create({
    //         mission,
    //         vision,
    //         features
    //     });

    //     if (newAboutUs) {
    //         return res.send({status: true, message: "About Us created successfully", newAboutUs});
    //     } else {
    //         return res.send({status: false, message: "Failed to save About Us"});
    //     }
    // } catch (error) {
    //     console.log("Error: ", error);
    // }
}

// website related controllers fn()
// export const aboutUsPages = async (req, res) => {
//     try {
//         const aboutUs = await AboutUs.find({}).sort({createdAt: -1});
//         return res.send({status: true, message: "About Us page fetched", aboutUs})
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }