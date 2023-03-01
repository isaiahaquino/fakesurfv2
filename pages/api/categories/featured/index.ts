import { TApiErrorResp, TApiSingleCategoryWithProductResp } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect"
import { prisma } from '@/prisma/client'


const getFeaturedProducts = async (
  req: NextApiRequest,
  res: NextApiResponse<TApiSingleCategoryWithProductResp | TApiErrorResp>
) => {
  try {
    const featuredData = await prisma.category.findFirst({
      where: {
        special: true,
      },
      select: {
        id: true,
        name: true,
        products: {
          orderBy: {
            createdAt: 'desc',
          },
          select: {
            id: true,
            title: true,
            description: true,
            image: true,
            price: true,
            quantity: true,
          },
        },
      },
    })

    if (!featuredData) {
      return res.status(404).json({ message: 'Featured not found'})
    }

    let hasMore = false

    return res
      .status(200)
      .json({ category: { ...featuredData, hasMore } })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something went wrong!! Please try again after sometime",
    })
  }
}

const handler = nc({ attachParams: true }).get(getFeaturedProducts)

export default handler