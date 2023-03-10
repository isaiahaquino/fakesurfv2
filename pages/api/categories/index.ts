import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { prisma } from "../../../prisma/client";
import { TApiAllCategoriesResp, TApiErrorResp } from "../../../types";

const getCategories = async (
    _req: NextApiRequest,
    res: NextApiResponse<TApiAllCategoriesResp | TApiErrorResp>
) => {
    try {
        const categories = await prisma.category.findMany({
            where: {
                special: false,
            },
            select: {
                id: true,
                name: true,
                special: true,
                products: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 8,
                    select: {
                        title: true,
                        description: true,
                        image: true,
                        price: true,
                        id: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return res.status(200).json({ categories });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong!! Please try again after sometime",
        });
    }
};

const handler = nc({ attachParams: true }).get(getCategories);

export default handler;