"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {

  return (
    <main className="h-full">
      <div className="w-full p-4 bg-[#D98324]">
        <div className="w-full mt-3 flex flex-col justify-center items-center">
          <h1 className="w-1/4 text-4xl font-bold text-center text-[#F2F6D0] pb-2 border-b-4">Contato</h1>

          <div className="text-[#F2F6D0] text-center w-1/2 mt-8">
            Abaixo estão presentes alguns links (e email) para contato:
          </div>

          <div className="w-4/5 mt-6 flex justify-evenly">
            <div className="w-1/5 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Image src="/iconsContato/email.png" width={64} height={64} alt="Email"></Image>
              <h3 className="text-[#443627] font-bold">felipemielkev@gmail.com</h3>
            </div>
            <div className="w-32 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Link href={"https://github.com/FelipeMielkeVieira"}>
                <Image src="/iconsContato/github.png" width={64} height={64} alt="GitHub"></Image>
                <h3 className="text-[#443627] font-bold">GitHub</h3>
              </Link>
            </div>
            <div className="w-32 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Link href={"https://www.linkedin.com/in/felipe-mielke-vieira-512aa8291/"}>
                <Image src="/iconsContato/linkedin.png" width={64} height={64} alt="LinkedIn"></Image>
                <h3 className="text-[#443627] font-bold">LinkedIn</h3>
              </Link>
            </div>
            <div className="w-32 h-28 flex flex-col justify-evenly items-center bg-[#EFDCAB] rounded-lg">
              <Link href={"https://www.instagram.com/_felipe_m_v/"}>
                <Image src="/iconsContato/instagram.png" width={64} height={64} alt="Instagram"></Image>
                <h3 className="text-[#443627] font-bold">Instagram</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
