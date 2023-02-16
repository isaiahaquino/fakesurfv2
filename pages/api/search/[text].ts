import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect"
import { prisma } from "../../../prisma/client";

const getSearchProducts = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const text = req.query.text as string
    console.log(text)

    const searchData = await prisma.product.findMany({
      where: {
        title: {
          search: text,
        },
      },
    })

    return res.status(200).json({ searchData })
  } catch (error) {
    return res.status(500).json({
      message: error,
    })
  }
}

const handler = nc({ attachParams: true }).get(getSearchProducts)

export default handler;