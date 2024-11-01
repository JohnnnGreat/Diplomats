// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongodb";
import Registration, { IRegistration } from "../../models/Registration";

type ResponseData = {
   message: string;
   data?: IRegistration;
   error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
   await connectToDatabase();

   if (req.method === "POST") {
      try {
         const registrationData: IRegistration = new Registration(req.body);
         const savedData = await registrationData.save();
         res.status(201).json({ message: "Registration successful", data: savedData });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Error saving registration", error: (error as Error).message });
      }
   } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
   }
}
