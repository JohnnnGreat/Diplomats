import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PagesHeader from "../shared/PageHeader";

// Define validation schema using Zod
const formSchema = z.object({
   name: z.string().min(1, "Name is required"),
   whatsapp: z.string().min(1, "WhatsApp No. is required"),
   email: z.string().email("Invalid email address"),
   gender: z.string().min(1, "Gender is required"),
   address: z.string().min(1, "Contact Address is required"),
   occupation: z.string().min(1, "Occupation is required"),
   course: z.string().min(1, "Preferred Course is required"),
   date: z.string().min(1, "Date is required"),
   amountDeposited: z.number().positive("Amount should be positive"),
   amountToComplete: z.number().positive("Amount to complete should be positive"),
   commencementDate: z.string().min(1, "Commencement Date is required"),
   completionDate: z.string().min(1, "Completion Date is required"),
});

type FormData = z.infer<typeof formSchema>;

const RegistrationForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormData>({
      resolver: zodResolver(formSchema),
   });

   const onSubmit = (data: FormData) => {
      console.log(data);
   };

   return (
      <>
         <PagesHeader>Registration</PagesHeader>
         <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form
               onSubmit={handleSubmit(onSubmit)}
               className="w-full max-w-2xl bg-white shadow-lg p-10 rounded-lg"
            >
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                     <label className="block text-gray-700 font-medium">Name</label>
                     <input
                        type="text"
                        {...register("name")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">WhatsApp No.</label>
                     <input
                        type="text"
                        {...register("whatsapp")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>}
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                     <label className="block text-gray-700 font-medium">Email Address</label>
                     <input
                        type="email"
                        {...register("email")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">Gender</label>
                     <input
                        type="text"
                        {...register("gender")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
                  </div>
               </div>

               <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Contact Address</label>
                  <textarea
                     {...register("address")}
                     className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                     <label className="block text-gray-700 font-medium">Occupation</label>
                     <input
                        type="text"
                        {...register("occupation")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">Preferred Course</label>
                     <input
                        type="text"
                        {...register("course")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                  <div>
                     <label className="block text-gray-700 font-medium">Date</label>
                     <input
                        type="date"
                        {...register("date")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">Amount Deposited</label>
                     <input
                        type="number"
                        {...register("amountDeposited", { valueAsNumber: true })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.amountDeposited && (
                        <p className="text-red-500 text-sm mt-1">{errors.amountDeposited.message}</p>
                     )}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">Amount to be Completed</label>
                     <input
                        type="number"
                        {...register("amountToComplete", { valueAsNumber: true })}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.amountToComplete && (
                        <p className="text-red-500 text-sm mt-1">{errors.amountToComplete.message}</p>
                     )}
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label className="block text-gray-700 font-medium">Commencement Date</label>
                     <input
                        type="date"
                        {...register("commencementDate")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.commencementDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.commencementDate.message}</p>
                     )}
                  </div>

                  <div>
                     <label className="block text-gray-700 font-medium">Completion Date</label>
                     <input
                        type="date"
                        {...register("completionDate")}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     {errors.completionDate && (
                        <p className="text-red-500 text-sm mt-1">{errors.completionDate.message}</p>
                     )}
                  </div>
               </div>

               <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-300"
               >
                  Register
               </button>
            </form>
         </div>
      </>
   );
};

export default RegistrationForm;
