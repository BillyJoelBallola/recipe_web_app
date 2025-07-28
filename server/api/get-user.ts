import { Clerk } from "@clerk/clerk-sdk-node";
import { createError, H3Event } from "h3";
import { getQuery } from "h3";

const clerk = Clerk({ secretKey: process.env.NUXT_CLERK_SECRET_KEY });

export default defineEventHandler(async (event: H3Event) => {
  try {
    const query = getQuery(event);
    const userId = query.userId as string;

    if (!userId) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing userId query parameter",
      });
    }

    const user = await clerk.users.getUser(userId);
    return user;
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || "Internal Server Error",
      data: {
        originalError: error?.errors || null,
      },
    });
  }
});
