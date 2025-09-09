'use client'

import { useEffect, useState } from "react";
import { MyLoading } from "@/features/loading";
import { useRouter } from "next/navigation";
import { getCookie } from "@/shared/utils/cookies";

enum Status {
  LOADING,
  READY
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<Status>(Status.LOADING)
  const router = useRouter()

  useEffect(() => {
    (async () => {
        const token = await getCookie('access_token')

        if (token) {
          router.push('/home')
        } else {  
          router.push('/auth')
        }
        setIsLoading(Status.READY)
      }
    )()
  }, [])

  return (
    <>
        {
          isLoading && <MyLoading/>
        }
    </>
  );
}
