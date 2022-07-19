import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  if (req.method === "GET") {
    const url = "https://fakestoreapi.com/products";

    const { data } = await axios.get(url);
    res.status(200).json(data);
  } else if (req.method === "POST") {
    console.log("Invalid Route");
  }
};

export default handler;
