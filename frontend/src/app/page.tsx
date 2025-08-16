import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { PostModel } from "@/models/post/post-model";
import { postRepository } from "@/repositories/post/api-post-repository";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const posts: PostModel[] = await postRepository.findAll();
  const firstPostUrl = posts[0].coverImageUrl;

  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href="#" className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition"
            src={firstPostUrl}
            width={1200}
            height={720}
            alt="Título do Post"
            priority
          ></Image>
        </Link>

        <div className="flex flex-col gap-4 sm:justify-center">
          <time dateTime="2025-08-16" className="text-slate-600 text-sm/tight">16/08/2025 04:54</time>

          <h1 className="text-2xl/tight mb-4 font-extrabold sm:text-4xl">
            <Link href='#'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
          </h1>

          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil
            quibusdam assumenda quas enim, culpa similique explicabo voluptate
            repudiandae quidem alias dicta libero sint consequuntur? Velit aperiam
            dicta numquam similique!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <p className="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        corrupti sint corporis possimus? Exercitationem dignissimos quia id
        velit minus, quos repellat, temporibus vel commodi sed, dicta error
        expedita minima perspiciatis. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Blanditiis corrupti sint corporis possimus?
        Exercitationem dignissimos quia id velit minus, quos repellat,
        temporibus vel commodi sed, dicta error expedita minima perspiciatis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </Container>
  );
}
