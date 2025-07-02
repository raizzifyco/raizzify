import { client } from "@/lib/sanity";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    image?: {
      asset?: {
        _ref: string;
      } | null;
    } | null;
  };
}

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(1200).fit("clip").url();

      return (
        <div className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl my-8 shadow-[inset_4px_4px_10px_#d1d9e6,inset_-4px_-4px_10px_#fff]">
          <img
            src={imageUrl}
            alt=""
            className="object-contain object-center w-full h-full rounded-xl"
          />
        </div>
      );
    },
  },
  block: {
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-800 mb-2 mt-6">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-lg leading-relaxed text-gray-700 mb-4">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-2 text-gray-700">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-base">{children}</li>,
  },
};

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "post" && defined(slug.current)]{
      "slug": slug.current
    }
  `);

  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: BlogPost = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset->{
        url
      }
    },
    author->{
      name,
      image
    }
  }`,
    { slug: params.slug }
  );

  const mainImgUrl = post.mainImage?.asset?.url;

  return (
    <div className="min-h-screen bg-[#f1f3f6] py-14 px-4 sm:px-6 md:px-10">
      <div className="max-w-3xl mx-auto bg-[#f1f3f6] p-6 md:p-10 rounded-3xl shadow-[inset_6px_6px_16px_#d1d9e6,inset_-6px_-6px_16px_#fff]">
        {mainImgUrl && (
          <div className="relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl my-8 shadow-[inset_4px_4px_10px_#d1d9e6,inset_-4px_-4px_10px_#fff]">
            <img
              src={mainImgUrl}
              alt={post.title}
              className="object-contain object-center w-full h-full rounded-xl"
            />
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500 mb-10">
          📅{" "}
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <article className="prose prose-lg prose-slate max-w-none">
          <PortableText value={post.body} components={components} />
        </article>

        {post.author?.name && (
          <div className="mt-16 pt-8 border-t border-gray-300 flex items-center gap-4">
            {post.author.image?.asset?._ref ? (
              <img
                src={urlFor(post.author.image)
                  .width(64)
                  .height(64)
                  .fit("crop")
                  .url()}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover shadow"
              />
            ) : (
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xl font-bold shadow">
                {post.author.name.charAt(0)}
              </div>
            )}

            <div>
              <p className="text-sm text-gray-500">Author</p>
              <p className="text-lg font-semibold text-gray-800">
                {post.author.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
