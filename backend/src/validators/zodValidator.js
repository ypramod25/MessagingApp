import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";
import { customErrorResponse } from "../utils/common/responseObjects.js";

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
      console.log("Validation error in zod validator", error);

      let explanation = [];

      // ✅ Zod validation error
      if (error instanceof ZodError) {
        console.log(error);
        error.issues.forEach((key) => {
          explanation.push(key.path[0] + ' ' + key.message);
        });

        return res.status(StatusCodes.BAD_REQUEST).json(
          customErrorResponse({
            message: "Validation error",
            explanation: explanation
          })
        );
      }

      // ✅ Non-zod error fallback
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
        customErrorResponse({
          message: "Internal server error",
          explanation: ["Unexpected validation error"]
        })
      );
    }
  };
};
