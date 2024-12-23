import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
import Anime from "../models/anime-model.js";
import { Router } from "express";
import multer from "multer";
import "dotenv/config.js";
const sasToken = process.env.SAS_TOKEN;
const accountName = process.env.ACCOUNT_NAME;
const containerName = process.env.CONTAINER_NAME;
const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net/?${sasToken}`
);
const containerClient = blobServiceClient.getContainerClient(containerName);
const upload = multer({ storage: multer.memoryStorage() });

const animeRouter = new Router();

animeRouter.get("/all-anime", async (req, res) => {
  const animes = await Anime.find();
  res.json(animes);
});

animeRouter.get("/anime/:_id", async (req, res) => {
  const { _id } = req.params;

  const anime = await Anime.findOne({ _id });
  res.json(anime);
});

async function uploadImageStream(blobName, file) {
  console.log(blobName);
  const uploadOptions = {
    blobHTTPHeaders: { blobContentType: file.mimetype },
  };
  const blobClient = containerClient.getBlockBlobClient(blobName);
  console.log(
    `\nUploading to Azure storage as blob\n\tname: ${blobName}:\n\tURL: ${blobClient.url}`
  );
  await blobClient.upload(file.buffer, file.size, uploadOptions);

  return blobClient.url.split('?')[0];
}
animeRouter.post("/anime", upload.single("image"), async (req, res) => {
  const { title, description } = req.body;
  const file = req.file;
  const image = await uploadImageStream(file.originalname, file);
  const anime = { title, description, image };
  const newAnime = new Anime(anime);
  await newAnime.save();
  res.status(200).json({message: 'Success'});
});
export default animeRouter;
