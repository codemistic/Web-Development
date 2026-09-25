import express from "express"
import bodyParser from "body-parser";
import {GoogleGenAI, TrafficType} from '@google/genai';
import {youtubePrompt} from "./prompts/youtubePrompt.js";
import dotenv from "dotenv";

let app = express();
dotenv.config();

let GEMINI_API_KEY = process.env.GEMINI_API_KEY
let PORT = process.env.PORT

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.render("index.ejs") 
})

app.post("/generate", (req,res)=>{

  try {
    let niche = req.body.niche
    const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});
    let prompt = youtubePrompt(niche)

  async function main() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt
  });

  let data = JSON.parse(((response.text).slice(7)).slice(0, -3))
  res.render("index.ejs", {data : data})
}
main();
  } catch (error) {
    console.log(error.data)
  } 
})
 
app.listen(PORT , ()=>{
    console.log(`server is runnig on the port ${PORT}`)
})