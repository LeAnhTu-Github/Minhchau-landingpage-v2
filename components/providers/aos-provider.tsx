 "use client";

 import { useEffect } from "react";
 import AOS from "aos";
 import "aos/dist/aos.css";

 interface AosProviderProps {
   children: React.ReactNode;
 }

 /**
  * Initialize AOS (Animate On Scroll) once on the client
  * and provide scroll-based animations via data-aos attributes.
  */
 export function AosProvider({ children }: AosProviderProps) {
   useEffect(() => {
     AOS.init({
       once: true,
       duration: 600,
       easing: "ease-out",
       offset: 120
     });
   }, []);

   return children;
 }

