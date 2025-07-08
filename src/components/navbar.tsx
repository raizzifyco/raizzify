"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { useToggle } from "@/styles/state/toggle-state";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { useState } from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const { isToggled } = useToggle();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: `#${id}` });
  };

  const handleClose = (id: string) => {
    setOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <>
      <div>
        <header className="px-4 font-manrope sm:px-6 md:px-8 z-[100] lg:px-14 py-6 h-16 flex items-center">
          <nav className="w-full flex items-center justify-between">
            <Link
              href="/"
              className="text-primary flex items-center gap-x-2 font-bold text-2xl uppercase"
            >
              <Image
                className="max-w-[42px] rounded-full"
                src={logo}
                alt="Logo"
              />
              <h1 className="leading-loose font-space-grotesk font-bold text-4xl text-primary">
                RAIZZIFY
              </h1>
            </Link>

            {pathname === "/about/" ? (
              <div className="md:flex hidden font-medium items-center gap-x-12"></div>
            ) : (
              <div className="flex md:items-center md:justify-center w-full pr-24">
                <div
                  className={`md:flex hidden items-center gap-x-12 font-medium ${
                    isToggled ? "me-24" : "me-16"
                  }`}
                >
                  <p
                    onClick={() => handleClose("features")}
                    className="cursor-pointer text-secondaryTextColor hover:text-primary"
                  >
                    Features
                  </p>
                  {!isToggled && (
                    <>
                      <p
                        onClick={() => handleClose("benefits")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        Benefits
                      </p>
                    </>
                  )}
                  <p
                    onClick={() => handleClose("testimonials")}
                    className="cursor-pointer text-secondaryTextColor hover:text-primary"
                  >
                    Testimonials
                  </p>
                  <Link
                    href="/blog"
                    className="text-secondaryTextColor hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                  <p
                    onClick={() => handleClose("faqs")}
                    className="cursor-pointer text-secondaryTextColor hover:text-primary"
                  >
                    FAQs
                  </p>
                </div>
              </div>
            )}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <Menu className="md:hidden block cursor-pointer" size={30} />
            </SheetTrigger>
            <SheetContent side="right" className="font-manrope">
              <SheetHeader>
                <SheetDescription>
                  {pathname === "/about/" ? (
                    <div className="flex flex-col text-xl items-start mt-6 gap-y-6 gap-x-6">
                      <p
                        onClick={() => handleClose("our-story")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        Our Story
                      </p>
                      <Separator />
                      <p
                        onClick={() => handleClose("how-we-work")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        How we work
                      </p>
                      <Separator />
                      <p
                        onClick={() => handleClose("careers")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        Careers
                      </p>
                      <Separator />
                      <Link
                        href="/blog"
                        onClick={() => setOpen(false)}
                        className="hover:text-primary text-secondaryTextColor"
                      >
                        Blog
                      </Link>
                      <Separator />
                    </div>
                  ) : (
                    <div className="flex flex-col text-xl items-start mt-6 gap-y-6 gap-x-6">
                      <p
                        onClick={() => handleClose("features")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        Features
                      </p>
                      <Separator />
                      {!isToggled && (
                        <>
                          <p
                            onClick={() => handleClose("benefits")}
                            className="cursor-pointer text-secondaryTextColor hover:text-primary"
                          >
                            Benefits
                          </p>
                          <Separator />
                          <p
                            onClick={() => handleClose("pricing")}
                            className="cursor-pointer text-secondaryTextColor hover:text-primary"
                          >
                            Pricing
                          </p>
                          <Separator />
                        </>
                      )}
                      <p
                        onClick={() => handleClose("testimonials")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        Testimonials
                      </p>
                      <Separator />
                      <p
                        onClick={() => handleClose("faqs")}
                        className="cursor-pointer text-secondaryTextColor hover:text-primary"
                      >
                        FAQs
                      </p>
                    </div>
                  )}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </>
  );
};

export default Navbar;
