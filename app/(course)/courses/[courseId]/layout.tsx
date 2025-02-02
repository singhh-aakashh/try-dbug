// "use server"; // Ensures this runs on the server side

// import { ReactNode } from "react";
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import CourseSideBar from "@/components/layout/CourseSideBar";
// import Topbar from "@/components/layout/Topbar";

// // ✅ Fix: Correctly define params without Promise issues
// interface LayoutProps {
//   children: ReactNode;
//   params: { courseId: string }; // Ensure params is an object, not a Promise
// }

// // ✅ Fix: Ensure function is async (Prevents Webpack and FirstArg errors)
// export default async function CourseDetailsLayout({ children, params }: LayoutProps) {
//   const session = await auth();
//   const userId = session?.userId;

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   const course = await db.course.findUnique({
//     where: { id: params.courseId },
//     include: {
//       sections: {
//         where: { isPublished: true },
//         orderBy: { position: "asc" },
//       },
//     },
//   });

//   if (!course) {
//     redirect("/");
//   }

//   return (
//     <div className="h-full flex flex-col">
//       <Topbar />
//       <div className="flex-1 flex">
//         <aside className="w-64 bg-white border-r shadow-md overflow-y-auto">
//           <CourseSideBar course={course} studentId={userId} />
//         </aside>
//         <main className="flex-1 p-6 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// }
