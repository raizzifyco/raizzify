import Link from "next/link";
import { client } from "@/lib/sanity";

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt != null &&
    publishedAt != ""
  ] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    mainImage {
      asset->{
        url
      }
    }
  }
`);

  return (
    <div className="min-h-screen bg-[#f1f3f6] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center font-extrabold  mb-10 text-gray-500 max-w-3xl mx-auto mt-2 text-base sm:text-lg">
          Expert insights, product updates, and stories from the Raizzify
          journey.
        </p>

        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="flex-shrink-0 w-[300px] sm:w-[350px]"
            >
              <div className="group bg-[#f1f3f6] rounded-3xl shadow-[inset_6px_6px_14px_#d1d9e6,inset_-6px_-6px_14px_#fff] hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#fff] transition-all duration-300 overflow-hidden">
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-[200px] object-cover object-center"
                  />
                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    📅{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
