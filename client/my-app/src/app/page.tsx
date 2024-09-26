'use client'

import { useEffect, useState } from "react";
import Auth from "./pages/auth/page";
import { Interface } from "./pages/interface/interface";
import { MyLoading } from "@/components/loading";

enum Status {
  LOADING,
  READY
}

export default function Home() {
  const [state, setState] = useState<string | null>()
  const [isLoading, setIsLoading] = useState<Status>(Status.LOADING)
  const localSt = (() => typeof window !== 'undefined' ? localStorage : null)()
  
  console.log("Проверка ci/cd")

  useEffect(() => {
      (async () => {
        await setState(localSt?.getItem('access_token'))
      })()
      setIsLoading(Status.READY)
  }, []);


  return (
    <>
        {
          isLoading ? state ? <Interface/> : <Auth setData={setState}/> : <MyLoading/>
        }
    </>
  );
}
