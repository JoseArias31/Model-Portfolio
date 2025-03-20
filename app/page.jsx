import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Button } from "@/components/ui/button"

export default function ModelPortfolio() {


  const images = [
    "/IMG_3167-Mejorado-NR.jpg",
    "/IMG_3163-Mejorado-NR.jpg",
    "/IMG_3135-Mejorado-NR.jpg",
    // "/IMG_3128-Mejorado-NR.jpg",
    "/IMG_3120-Mejorado-NR.jpg",
    "/IMG_3115-Mejorado-NR.jpg",
    "/IMG_3072-Mejorado-NR.jpg",
    "/IMG_3067-Mejorado-NR.jpg",
    "/IMG_3008-Mejorado-NR.jpg",
    "/IMG_2971-Mejorado-NR.jpg",
    "/IMG_2959-Mejorado-NR.jpg",
    "/IMG_2943-Mejorado-NR.jpg",
    "/IMG_2920-Mejorado-NR.jpg",
    "/IMG_2915-Mejorado-NR.jpg",
    "/IMG_2904-Mejorado-NR.jpg",
    "/IMG_2902-Mejorado-NR.jpg",
    "/IMG_2897-Mejorado-NR.jpg",
    "/IMG_2843-Mejorado-NR.jpg",
    "/IMG_2832-Mejorado-NR.jpg",
    "/IMG_2830-Mejorado-NR.jpg",
    "/IMG_2787-Mejorado-NR.jpg",
    "/IMG_2785-Mejorado-NR.jpg",
    "IMG_2782-Mejorado-NR-Recovered.jpg",
"IMG_2724.jpg",
"IMG_2724-Recovered.jpg",
"IMG_2718-Mejorado-NR-Recovered.jpg",
"IMG_2709-Mejorado-NR.jpg",
"IMG_2692-Mo-NR.jpg"
  ];


  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Laura Rodriguez
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary">
              Portfolio
            </Link>
            {/* <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link> */}
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact">Book Now</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden" >
          <Image
            src="/IMG_2782-Mejorado-NR-Recovered.jpg"
            alt="Model Hero Image"
            fill
            priority
            className="object-cover object-top sm:object-[50%_35%] md:object-[50%_15%]"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end">
            <div className="container pb-20 md:pb-32">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Laura Rodriguez</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-md">
                Young Model based in Toronto with a passion for fashion and editorial photography.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/IMG_3067-Mejorado-NR.jpg"
                  alt="Model Portrait"
                  width={600}
                  height={800}
                  className="rounded-lg object-cover mx-auto"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground">
                Hey there! I'm stepping into the modeling world with a passion for fashion, creativity, and self-expression. I love experimenting with different styles, from trendy streetwear to chic editorial looks and I'm excited to bring fresh energy to every shoot.
                </p>
                <p className="text-muted-foreground">
                Modeling, for me, is more than just posing; it's about telling a story, capturing a vibe, and embracing confidence. I’m eager to learn, grow, and connect with photographers, brands, and creatives who share my vision. This is just the beginning, and I can’t wait to see where this adventure takes me!
                </p>
                <div className="pt-4">
  <h3 className="text-xl font-medium mb-3">Stats</h3>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="text-sm text-muted-foreground">Height</p>
      <p className="font-medium">5'2" / 158 cm</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Hair</p>
      <p className="font-medium">Brown</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Eyes</p>
      <p className="font-medium">Black</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Size</p>
      <p className="font-medium">US 4 (EU 34)</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Bust</p>
      <p className="font-medium">84 cm / 33"</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Waist</p>
      <p className="font-medium">61 cm / 24"</p>
    </div>
    <div>
      <p className="text-sm text-muted-foreground">Hips</p>
      <p className="font-medium">87 cm / 34.25" </p>
    </div>
  

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
                <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`Portfolio Image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="font-medium text-lg">Editorial {index + 1}</h3>
                      <p className="text-sm text-white/90 mt-1">Fashion Collection</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              {/* <Button size="lg">View Full Gallery</Button> */}
            </div>
          </div>
        </section>

        {/* Experience Section
        <section id="experience" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Fashion Campaigns</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Vogue Magazine Editorial</li>
                  <li>Summer Collection 2023</li>
                  <li>Luxury Brand Ambassador</li>
                  <li>New York Fashion Week</li>
                  <li>Paris Runway Show</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Commercial Work</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Beauty Product Campaign</li>
                  <li>Lifestyle Brand Photoshoot</li>
                  <li>Television Commercial</li>
                  <li>Print Advertisement</li>
                  <li>Product Launch Event</li>
                </ul>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Publications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Elle Magazine Cover</li>
                  <li>Harper's Bazaar Feature</li>
                  <li>GQ Magazine Spread</li>
                  <li>Vanity Fair Interview</li>
                  <li>Fashion Blog Collaborations</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials */}
        {/* <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted p-6 rounded-lg">
                <p className="italic text-muted-foreground mb-4">
                  "Jane is an exceptional talent who brings professionalism and creativity to every shoot. Her ability
                  to embody different characters and styles makes her a photographer's dream to work with."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    AP
                  </div>
                  <div>
                    <p className="font-medium">Alex Peterson</p>
                    <p className="text-sm text-muted-foreground">Fashion Photographer</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <p className="italic text-muted-foreground mb-4">
                  "Working with Jane on our summer campaign exceeded all expectations. Her versatility and
                  professionalism helped us create imagery that resonated deeply with our audience."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    SM
                  </div>
                  <div>
                    <p className="font-medium">Sarah Miller</p>
                    <p className="text-sm text-muted-foreground">Creative Director, Fashion Brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Work With Me</h2>
              <p className="text-muted-foreground mb-8">
                Interested in booking me for your next project? Get in touch for collaborations, bookings, and inquiries.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Link
                  href="https://www.instagram.com/lau.rh_89?igsh=MW9oZmRrYzdpOGRn&utm_source=qr"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors target='_blank'"

                >
                  <FaInstagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
             
                <Link
                  href="mailto:laucamirodriguez89@gmail.com"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors target='_blank'"
                >
                  <MdEmail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                  
                </Link>
                <Link
                  href="https://www.facebook.com/share/1EUcaLfSDz/?mibextid=wwXIfr"
                  className="p-3 rounded-full bg-background hover:bg-primary/10 transition-colors target='_blank'"
                >
                  <FaFacebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </div>
              
<p className="text-muted-foreground">For bookings and inquiries, please contact: +1(647) 819-3754 </p>



              {/* <Button size="lg" className="w-full md:w-auto">
              
              Contact My Agency
              </Button>
               */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground"> {new Date().getFullYear()} Laura Rodriguez. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
