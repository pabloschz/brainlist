import { createRouter } from "./context";
import { z } from "zod";
import { createNextApiHandler } from "@trpc/server/adapters/next";

export const todoRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.todo.findMany();
    },
  })
  .mutation('createTodo', {
    input: z.object({ text: z.string().min(5) }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.todo.create({
        data: {
          text: input.text
        }
      });
    },
  });
