import { nanoid } from 'nanoid'
import URL from "../models/url.js"
export async function generateURLshortID(req,res){
    if(!req.body.redirectURL)res.status(400).json({error:"Please give URL to redirect to."});

    const redirectURL = req.body.redirectURL;
    const shortID  =  nanoid(8);
    await URL.create({
        shortID:shortID,
        redirectURL:redirectURL,
        visitHistory:[]
    })
    return res.send({id:shortID})
}

export async function getAnalytics(req,res){
    const shortID = req.params.id;
    const result = await URL.findOne({shortID});
    res.status(200).json({totalClicks:result.visitHistory.length,
        analytics:result.visitHistory
    })
}

