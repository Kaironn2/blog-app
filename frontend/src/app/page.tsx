import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function Home() {

  return (
    <Suspense fallback={<SpinLoader />}>
      <PostsList />
    </Suspense>
  );
}
